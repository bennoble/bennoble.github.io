// Contents rail scroll-spy, reading progress, and copy buttons.
(function () {
  var rows = document.querySelectorAll('.br-rail nav a[href^="#"]');
  var heads = [];
  rows.forEach(function (row) {
    var h = document.getElementById(row.getAttribute('href').slice(1));
    if (h) heads.push(h);
  });

  var bar = document.querySelector('[data-progress-bar]');
  var pct = document.querySelector('[data-progress-pct]');
  var sec = document.querySelector('[data-progress-section]');
  var reading = document.querySelector('[data-reading]');
  var total = reading ? reading.getAttribute('data-section-count') : 0;
  var queued = false;

  function update() {
    queued = false;
    var current = 0;
    heads.forEach(function (h, i) {
      if (h.getBoundingClientRect().top < window.innerHeight * 0.4) current = i;
    });
    rows.forEach(function (row, i) {
      row.classList.toggle('is-active', i === current);
      if (i === current) row.setAttribute('aria-current', 'location');
      else row.removeAttribute('aria-current');
    });
    if (bar) {
      var span = document.documentElement.scrollHeight - window.innerHeight;
      var share = span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
      var filled = Math.round(share * 20);
      bar.textContent = '━'.repeat(filled) + '─'.repeat(20 - filled);
      pct.textContent = Math.round(share * 100) + '%';
      sec.textContent = '§' + (current + 1) + ' of ' + total;
    }
  }

  function queue() {
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(update);
    }
  }

  if (heads.length) {
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    update();
  }

  function copy(button, text, label) {
    navigator.clipboard.writeText(text).then(function () {
      button.textContent = 'COPIED';
      setTimeout(function () { button.textContent = label; }, 1500);
    });
  }

  document.querySelectorAll('.prompt-card').forEach(function (card) {
    var bar = document.createElement('div');
    bar.className = 'br-box__bar';
    bar.innerHTML = '<span>PROMPT</span><button type="button" class="br-copy">COPY</button>';
    card.insertBefore(bar, card.firstChild);
    var button = bar.querySelector('button');
    button.addEventListener('click', function () {
      copy(button, card.querySelector('p').textContent, 'COPY');
    });
  });

  document.querySelectorAll('thead').forEach(function (head) {
    if (!head.textContent.trim()) head.hidden = true;
  });

  var share = document.querySelector('[data-copy-url]');
  if (share) {
    share.addEventListener('click', function () { copy(share, window.location.href, 'Copy URL'); });
  }
})();

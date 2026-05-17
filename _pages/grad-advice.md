---
title: "Advice for Students"
display_title: "Advice"
permalink: /advice-for-students/
author_profile: true
classes: guides-page
file_no: "004"
file_label: "Advice"
lede: "Practical guidance on academic writing, research, productivity, and professional development."
record_count: "14 records listed"
redirect_from:
  - /grad-advice/
  - /guides-resources/
---

<div class="br-advice-list">

{% assign advice_posts = site.posts | where: "nav_section", "advice" | sort: "nav_order" %}
{% for post in advice_posts %}
  <a class="br-list-row br-advice-row" href="{{ post.url | relative_url }}">
    <span class="br-row-meta">{{ forloop.index | prepend: "0" | slice: -2, 2 }}</span>
    <span>
      <span class="br-row-title">{{ post.title }}</span>
      <span class="br-row-subtitle">{{ post.excerpt | strip_html }}</span>
    </span>
    <span class="br-row-action">↗ Read</span>
  </a>
{% endfor %}

{% assign external_offset = advice_posts | size %}

<a class="br-list-row br-advice-row" href="https://jayrobwilliams.com/posts/2020/06/academic-website/">
  <span class="br-row-meta">{{ external_offset | plus: 1 | prepend: "0" | slice: -2, 2 }}</span>
  <span>
    <span class="br-row-title">Building an Academic Website</span>
    <span class="br-row-subtitle">Rob Williams on building and maintaining an academic website.</span>
  </span>
  <span class="br-row-action">↗ Read</span>
</a>

<a class="br-list-row br-advice-row" href="https://miryaholman.substack.com/p/three-steps-to-success">
  <span class="br-row-meta">{{ external_offset | plus: 2 | prepend: "0" | slice: -2, 2 }}</span>
  <span>
    <span class="br-row-title">Three Steps to Success</span>
    <span class="br-row-subtitle">Mirya Holman on academic work habits and professional development.</span>
  </span>
  <span class="br-row-action">↗ Read</span>
</a>

<a class="br-list-row br-advice-row" href="https://statmodeling.stat.columbia.edu/2023/11/27/rewriting-a-title-and-abstract-to-a-scientific-paper/">
  <span class="br-row-meta">{{ external_offset | plus: 3 | prepend: "0" | slice: -2, 2 }}</span>
  <span>
    <span class="br-row-title">Rewrite and improve the title and abstract of a scientific paper</span>
    <span class="br-row-subtitle">Andrew Gelman on making article framing clearer.</span>
  </span>
  <span class="br-row-action">↗ Read</span>
</a>

</div>

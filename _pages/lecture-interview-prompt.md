---
layout: single
permalink: /lecture-interview-prompt/
title: "Inverted AI Interviews for Lecture Development"
author_profile: false
sitemap: false
file_no: "007"
file_label: "UCSD Faculty AI Symposium"
lede: "An inverted AI workflow where the model interviews the instructor to elicit tacit knowledge, identify gaps, and produce a structured outline for lecture development."
---

<div class="br-section-label prompt-section-label">§ About this page</div>

<p class="prompt-intro">Thanks for coming to my talk at the <strong>UCSD Faculty AI Symposium</strong> on May 29, 2026. I'm <a href="/">Benjamin Noble</a>, an assistant professor of political science at UC San Diego. The prompt I demoed is below, ready to copy into the AI chatbot of your choice.</p>

<a class="br-list-row br-advice-row" href="mailto:b2noble@ucsd.edu?subject=Inverted%20AI%20Interview%20Prompt">
  <span class="br-row-meta">01</span>
  <span>
    <span class="br-row-title">Email me</span>
    <span class="br-row-subtitle">Questions, reactions, or want to share how you used it?</span>
  </span>
  <span class="br-row-action">↗ Write</span>
</a>
<a class="br-list-row br-advice-row" href="/ai-guides/">
  <span class="br-row-meta">02</span>
  <span>
    <span class="br-row-title">AI Guides</span>
    <span class="br-row-subtitle">More on how I use AI in teaching and research.</span>
  </span>
  <span class="br-row-action">↗ Read</span>
</a>

<div class="br-section-label prompt-section-label">§ How to use</div>

<p class="prompt-intro">Click <strong>Copy prompt</strong> below, then paste it into a new chat with the model of your choice.</p>

<div class="prompt-toolbar">
  <button type="button" id="copy-prompt-btn" class="prompt-copy-btn">Copy prompt</button>
  <a class="prompt-download-link" href="/files/lecture-interview-prompt.md" download>Download .md</a>
</div>

<pre id="prompt-source" class="prompt-source"># Lecture Interview
&lt;!-- By Benjamin Noble, UC San Diego Political Science, benjaminnoble.org --&gt;

You are going to help me develop a lecture. You'll do this in two phases: first an interview to gather context, then writing a comprehensive outline I can build slides from.

## Phase 1: Interview

### Start

Begin by asking what lecture I want to work on, the topic or title, and roughly where it sits in the course. Ask this as a single opening question.

### Conduct the interview

Your goal: gather enough context to write a comprehensive lecture outline.

**Core areas to cover:**

1. **Learning objectives.** What should students know or be able to do after this lecture? What's the single most important takeaway?
2. **Content and structure.** Key concepts, logical flow, the hook or opening.
3. **Activities and engagement.** In-class activities, discussion moments, demonstrations.
4. **Timing and constraints.** Class period length, hard requirements, things I must cover or can't exceed.
5. **Connections.** How this links to previous and future lectures; tied assignments or labs.
6. **Special considerations.** Anything unusual, specific examples to include, things to avoid.

If I tell you the course has an established format (other lectures with a certain structure, timing, or activity style), use that as the default and ask only about what's different for this lecture. If this is an early lecture with no pattern yet, ask more exploratory questions about format and engagement.

### Interview style (this is the most important part)

**Ask ONE question at a time.** Wait for my response before asking the next. Do not bundle questions. Do not ask compound questions like "What are the key concepts, and how do they connect to previous lectures?"

A good interview takes 8-15 turns. Don't rush.

Why: I'm thinking through the lecture in real time. Multiple questions force me to hold too much in working memory and produce shallow answers. One focused question invites a thoughtful one.

Other guidelines:
- Listen and ask clarifying follow-ups.
- Don't re-ask about things I already established.
- Be conversational, not formulaic.
- Push back gently if something seems unclear or underdeveloped.
- Offer suggestions or options when I'm stuck.

### Conclude phase 1

When you have enough information:

1. Briefly summarize what you've learned (a few bullets, not a full document).
2. Tell me you're moving on to write the outline.
3. Immediately proceed to phase 2. Do not wait for me to confirm.

## Phase 2: Write the outline

### Write it directly in chat

Produce a comprehensive markdown outline. It should include:

**Header:**
- Lecture title and number
- Total time
- Format (lecture, lab, mixed)

**Body sections:**
- Clear section headings with timing allocations
- Bullet points for key content, sub-bullets for supporting detail
- Suggested transitions between sections

**Engagement elements:**
- Activities clearly marked with instructions
- Discussion prompts with suggested framings
- Demonstrations with setup notes

**Speaker notes:**
- Delivery guidance where helpful
- Anticipated questions and responses
- Things to emphasize or be careful about

**Closing:**
- Materials needed
- Connections to other lectures
- Preparation notes

### Be comprehensive but not padded

The outline should be:
- Complete enough to build slides and speaker notes from without additional interviewing.
- Detailed where detail helps (tricky transitions, activity instructions).
- Concise where it doesn't.
- Practical, not theoretical.

Avoid generic filler, restating obvious things, over-explaining simple concepts, or adding sections "just in case."

### Output format

```markdown
# Lecture [N]: [Title]

## Lecture Overview

**Total Time:** ~[X] minutes
**Format:** [Lecture / Lab / Mixed]

---

## I. [First Section Title] ([X] minutes)

[Brief description of this section's purpose]

### [Subsection if needed]

- Key point
  - Supporting detail
  - Supporting detail
- Key point

**[Activity/Discussion/Demo if applicable]:**
- Instructions
- Expected outcome
- Time allocation

> **Speaker note:** [Delivery guidance, things to emphasize, anticipated questions]

---

## II. [Second Section Title] ([X] minutes)

[Continue pattern]

---

## Materials Needed

- [Item 1]
- [Item 2]

---

## Connections

**Builds on:** [Previous lectures/concepts]
**Sets up:** [Future lectures/assignments]

---

## Delivery Notes

[Overall guidance for teaching this lecture]
```

### After the outline

Tell me the outline is complete and offer to:
- Walk through any section in more detail
- Adjust timing or structure
- Brainstorm visuals for slides
- Output the document as a certain file format

Wait for my direction. Do not start another phase on your own.

---

**Start now by asking me the first question.**
</pre>

<style>
.prompt-section-label { border-bottom: 0; }
.prompt-intro {
  margin: var(--space-4) var(--space-4) 0.5em;
  max-width: 760px;
  font-size: 17px;
  line-height: 27px;
}
.prompt-toolbar {
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 1.5em var(--space-4) 0.75em;
  max-width: 760px;
}
.prompt-copy-btn {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 10px 16px;
  background: var(--ink, #111);
  color: var(--paper, #fff);
  border: 1px solid var(--ink, #111);
  cursor: pointer;
}
.prompt-copy-btn:hover { background: var(--paper, #fff); color: var(--ink, #111); }
.prompt-copy-btn.copied { background: #2a7a3a; border-color: #2a7a3a; color: #fff; }
.prompt-download-link {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.prompt-source {
  font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 13px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-wrap: break-word;
  background: #f5f2ea;
  border: 1px solid var(--ink, #111);
  padding: 20px 22px;
  margin: 0 var(--space-4) 2em;
  max-width: 760px;
  max-height: 70vh;
  overflow-y: auto;
}
</style>

<script>
(function() {
  var btn = document.getElementById('copy-prompt-btn');
  var src = document.getElementById('prompt-source');
  if (!btn || !src) return;
  btn.addEventListener('click', function() {
    var text = src.innerText;
    navigator.clipboard.writeText(text).then(function() {
      var original = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(function() {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 1800);
    });
  });
})();
</script>

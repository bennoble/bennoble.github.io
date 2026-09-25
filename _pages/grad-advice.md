---
title: "Advice for Students"
display_title: "Advice"
permalink: /advice-for-students/
author_profile: true
classes: guides-page
file_no: "004"
file_label: "Advice"
lede: "Practical guidance on academic writing, research, productivity, and professional development."
record_count: "15 records listed"
redirect_from:
  - /grad-advice/
  - /guides-resources/
---

<div class="br-advice-list">

{% assign advice_posts = site.posts | where: "nav_section", "advice" | where_exp: "post", "post.archived != true" | sort: "nav_order" %}
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

</div>

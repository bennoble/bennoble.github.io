#!/usr/bin/env bash
set -euo pipefail

input="_pages/teaching-causal-inference.md"
output="files/poli170a-summer2026-syllabus.pdf"
tmp="$(mktemp /tmp/poli170a-syllabus.XXXXXX.md)"
trap 'rm -f "$tmp"' EXIT

sed '/^{: .*}$/d' "$input" > "$tmp"

pandoc "$tmp" \
  --from markdown+yaml_metadata_block+raw_html \
  --metadata title= \
  --pdf-engine=xelatex \
  --include-in-header=_pdf/syllabus-header.tex \
  --include-before-body=_pdf/syllabus-cover.tex \
  --toc \
  --number-sections=false \
  -V fontsize=12pt \
  -V geometry:top=0.45in \
  -V geometry:bottom=0.45in \
  -V geometry:left=0.55in \
  -V geometry:right=0.55in \
  -o "$output"

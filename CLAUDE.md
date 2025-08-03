# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
- `bundle install` - Install Ruby dependencies
- `bundle exec jekyll serve` - Serve site locally at localhost:4000 with live reload
- `bundle exec jekyll liveserve` - Alternative serve command with live reload
- `bundle clean` - Clean up the directory

### JavaScript Build
- `npm run build:js` - Build and minify JavaScript assets
- `npm run uglify` - Minify JavaScript files
- `npm run watch:js` - Watch JavaScript files and rebuild on changes

### Dependency Management
- If encountering security vulnerabilities, delete `Gemfile.lock` and run `bundle install`
- For Ruby development, ensure `ruby-dev`, `bundler`, and `nodejs` are installed

## Architecture Overview

This is a Jekyll-based academic website using the Minimal Mistakes theme, forked from academicpages template. The site generates static HTML from Markdown and YAML data files.

### Key Structure
- **Jekyll Collections**: Publications (`_publications/`), talks (`_talks/`), teaching (`_teaching/`), portfolio (`_portfolio/`)
- **Content Pages**: Located in `_pages/` for main site sections (research, CV, teaching, etc.)
- **Blog Posts**: Located in `_posts/` with Jekyll naming convention (YYYY-MM-DD-title.md)
- **Layouts**: Template files in `_layouts/` (default.html, single.html, talk.html, etc.)
- **Includes**: Reusable components in `_includes/` (navigation, author profile, analytics)
- **Data Files**: Site configuration in `_data/` (navigation.yml, authors.yml)
- **Assets**: Styles in `_sass/`, JavaScript in `assets/js/`, static files in `files/`

### Content Generation
- **Markdown Generator**: Jupyter notebooks in `markdown_generator/` convert TSV data to individual markdown files for publications and talks
- **Data Sources**: Uses TSV files (talks.tsv, publications.tsv) to generate structured content
- **Automation**: Python scripts (.py files) provide command-line alternatives to Jupyter notebooks

### Configuration
- **Main Config**: `_config.yml` contains site-wide settings, author info, analytics, and Jekyll configuration
- **Navigation**: Defined in `_data/navigation.yml`
- **Collections**: Publications, talks, teaching, and portfolio are configured as Jekyll collections with custom permalinks
- **Analytics**: Google Analytics integration configured in head.html and _config.yml

### Styling and Assets
- **SCSS**: Styles organized in `_sass/` directory with main.scss as entry point
- **JavaScript**: Vendor libraries and custom scripts in `assets/js/`, built with npm scripts
- **Static Files**: Papers, CV, and syllabi stored in `files/` directory
- **Images**: Site images and media in `images/` directory

### Theme Customization
- Based on Minimal Mistakes Jekyll theme
- Custom author profile, navigation, and academic-focused layouts
- Responsive design with support for talks, publications, and CV display
- Comment system integration (Disqus, Staticman) available but configurable
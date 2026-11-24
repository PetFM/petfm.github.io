# AI Vet – presentation website

Static one-page presentation of the AI Vet project (Team 13, FIIT STU), published with GitHub Pages at **https://petfm.github.io/**.

Plain HTML, CSS and JavaScript with no build step and no dependencies. All paths are relative.

## Publishing

GitHub Pages serves the `main` branch from the repository root. Every push to `main` goes live within a minute or two.
The empty `.nojekyll` file tells Pages to serve the files as they are, without running Jekyll.

## Structure

```
.
├── index.html          page content (SK/EN texts: class="sk" / class="en")
├── .nojekyll           disables Jekyll on GitHub Pages
├── assets/
│   ├── icons.svg       icons
│   └── img/            images (WebP)
├── css/
│   ├── base.css        colors, fonts, reset, breakpoints
│   ├── layout.css      container, header, footer
│   ├── components.css  buttons, chat preview, survey dialog
│   └── sections.css    individual page sections
└── js/
    ├── config.js       survey and Figma prototype links
    ├── team.js         team members
    ├── lang.js         SK / EN switch
    ├── chat.js         chat animation
    ├── survey-gate.js  “Have you tried the prototype?” dialog
    └── main.js         links, header, scroll animations
```

## Local preview

Open the page through a web server (not via `file://`), otherwise the icons won't load:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

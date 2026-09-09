# Mohammed Anaan — portfolio

A small multi-page portfolio. No framework, no build step — plain HTML, CSS and
a few lines of JS. Deep black, one red accent, Anton for display and Oswald for
UI.

## Pages

| File               | Page       | What's on it |
|--------------------|------------|--------------|
| `index.html`       | Home       | The opening still — the ANAAN wordmark with the podium portrait in front of it. |
| `tech-stack.html`  | Tech Stack | "The Creative Universe" — the stack as **technology logos** orbiting a core, plus a grouped list. Logos are self-hosted in `public/logos/` (from simpleicons.org, recoloured). |
| `about.html`       | About      | The bio, a facts panel, a **Show card** popup (a red-themed profile card), and a **résumé** download (`public/doc/resume.pdf`). |
| `projects.html`    | Projects   | Three real builds — OpenAI EduMind, SkyCast Weather, Temperature Converter — plus a **Certificates** grid (internships + courses). |
| `contact.html`     | Contact    | The closing still behind a scrim, and every way to get in touch. |

## Shared shell

- `src/styles/site.css` — fonts, tokens, reset, the fixed header, the mobile
  menu, the footer. Loaded by every page.
- `src/nav.js` — marks the current page in both navs (from `<body data-page>`)
  and runs the burger menu.
- `src/about.js` — the Show-card popup (a native `<dialog>`), About page only.
- Each page also loads one page-specific stylesheet (`home.css`,
  `tech-stack.css`, `about.css`, `projects.css`, `contact.css`).

## Run it

```bash
python tools/serve.py 5173
```

then open <http://localhost:5173>. Any static file server works — there is
nothing to compile. Deploy the folder as-is.

## Assets

Everything the site uses lives in `public/`:

- `public/media/wordmark.jpg` — the ANAAN typography (red on black).
- `public/media/anaan-hero.png` — the podium portrait, cut out (transparent).
- `public/media/profile.jpg` — the headshot used in the Show-card popup.
- `public/fin/finale.jpg` — the finished ANAAN composition used on Contact.
- `public/projects/real/*.png` — project screenshots.
- `public/logos/*.svg` — technology logos for the Tech Stack page.
- `public/doc/resume.pdf` — the résumé linked from About.
- `public/fonts/*` — Anton + Oswald, self-hosted.
- `public/tex/grunge.png` — the distressed texture on the wordmark and menu.

To swap the portrait or wordmark, replace the file in `public/media/` (keep the
name) — the pages reference them by path.

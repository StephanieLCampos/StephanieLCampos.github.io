# Stephanie Campos | Personal Website

A static, dependency-free personal site for GitHub Pages. No build step.

Live URL once deployed: https://stephanielcampos.github.io

## File layout

```
.
├── index.html        Single-page site: hero, about, projects, experience, skills, education, contact
├── styles.css        All styling, light and dark mode, responsive, print styles
├── script.js         Footer year and active-section nav highlight (site works without it)
├── 404.html          Custom "page not found" page
├── robots.txt        Crawler rules and sitemap pointer
├── sitemap.xml       Single-URL sitemap
├── .nojekyll         Tells GitHub Pages to serve files as-is
└── assets/
    ├── resume.pdf    Downloadable resume (keep the filename, or update the links in index.html)
    ├── favicon.svg   Browser tab icon ("SC")
    └── stephanie.jpg Portrait (hero image and social preview)
```

## Deploy to GitHub Pages (free)

A repository named `<username>.github.io` publishes at the root URL, so the repo name must be exactly `StephanieLCampos.github.io`.

1. On GitHub, create a **public** repository named `StephanieLCampos.github.io`. Do not add a README or license there.
2. Put these files in it, either by uploading them in the browser or with git:

   ```bash
   cd stephanie-portfolio
   git init -b main
   git add .
   git commit -m "Initial portfolio site"
   git remote add origin https://github.com/StephanieLCampos/StephanieLCampos.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings > Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main`, and folder to `/ (root)`. Save.
4. Wait one to two minutes, then open https://stephanielcampos.github.io.

Every later change is live after you push to `main`.

## Before you publish: checklist

- [x] **Add your photo** as `assets/stephanie.jpg` (cropped from `profile_picture.JPG`).
- [x] **Replace the placeholder project links.** Each project card links to its own repo.
- [ ] **Add the paper link** for the IEEE CCNC 2027 paper once it is published (IEEE Xplore or arXiv). Add it next to the QUIC card's GitHub link.
- [x] **Check the contact email** in `index.html` and the JSON-LD block in `<head>`.
- [ ] **Update the resume.** When you revise `resume.pdf`, replace `assets/resume.pdf` with the new file, and keep the content on the site consistent with it.
- [ ] **Update `sitemap.xml` `lastmod`** whenever you make a substantial change.
- [ ] **Run a check.** Open the site in Chrome, run Lighthouse (DevTools > Lighthouse) for Performance, Accessibility, Best Practices, and SEO, and test on a phone-width window.

## Optional: custom domain

A custom domain such as `stephaniecampos.dev` is optional. It is a yearly registration fee from a registrar, and the price varies by domain ending. To use one:

1. Buy the domain from a registrar.
2. Add a file named `CNAME` at the repo root containing only the domain, e.g. `stephaniecampos.dev`.
3. At your registrar, add DNS records pointing to GitHub Pages (`A` records to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, or a `CNAME` for `www` to `stephanielcampos.github.io`). GitHub's Pages docs list the current addresses.
4. In **Settings > Pages**, enter the custom domain and enable **Enforce HTTPS** once it becomes available.
5. Update the `canonical`, `og:url`, JSON-LD `url`, `sitemap.xml`, and `robots.txt` URLs to the new domain.

## Notes on design choices

- **Single page, no framework.** Recruiters check a new-grad site in under a minute, so everything important sits on one scrollable page with clear anchors.
- **Above the fold:** name, one-line positioning statement, availability status, and three calls to action (projects, resume, contact).
- **Projects are written as outcomes.** Each card shows what was built, a measured result, and the stack.
- **Accessibility:** semantic landmarks, skip link, visible focus states, alt text, labels for external links, reduced-motion support, and color contrast in both themes.
- **Discoverability:** meta description, Open Graph and Twitter tags, `Person` structured data, `robots.txt`, and a sitemap.
- **Performance:** no JavaScript frameworks, no web fonts, no tracking scripts. The only large file is the photo, so compress it.
- **No contact form.** A static site cannot process form submissions without a third-party service, so the page uses a `mailto:` link.

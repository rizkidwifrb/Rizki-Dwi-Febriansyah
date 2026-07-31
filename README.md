# Rizki Visual Specialist Portfolio

Premium monochrome creative portfolio for Rizki Dwi Febriansyah, S.Sos.

The interface is intentionally black and white. Rizki's portrait is rendered in
grayscale, while the original graphic-design work and IMAN IN MOTION screenshots
retain their source color.

## Development

Requirements:

- Node.js 22 or newer
- npm

Run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Production

Build:

```bash
npm run build
```

The build script generates `dist/index.html` with all generated CSS inside a
`style` tag and all generated JavaScript inside a `script` tag. Images remain in
`dist/assets` so they can be optimized, cached, and packaged with the website.

Run the production folder:

```bash
python server.py
```

Open:

```text
http://localhost:8000
```

`server.py` uses only the Python standard library.

## Editing guide

Primary content, contact links, experience, skills, certifications, video URLs,
and project metadata:

```text
src/App.jsx
```

Visual system, responsive rules, grayscale treatment, animation, and layout:

```text
src/styles.css
```

Profile photo gallery and header avatar:

```text
public/assets/profile
```

The rotating gallery uses selected portrait photos from the Instagram export supplied by Rizki.

The graphic archive also includes eight selected poster and campaign visuals from the same export.

Graphic design works:

```text
public/assets/graphic-design
```

IMAN IN MOTION 3:4 screenshots:

```text
public/assets/iman-in-motion
```

To add another graphic design work:

1. Add the optimized image to `public/assets/graphic-design`.
2. Add one item to the `artworks` array in `src/App.jsx`.

To add another IMAN IN MOTION screenshot:

1. Add a 3:4 image to `public/assets/iman-in-motion`.
2. Add one item to the `webScreens` array in `src/App.jsx`.

WeMovies AI cover:

```text
public/assets/web-projects/wemovies-ai.webp
```

The WeMovies AI case study links to its live product and the
`aliimndev/capstone-project` source repository.

## Included interactions

- Working desktop navigation and compact four-item mobile dock.
- Filterable graphic-design archive.
- Keyboard-friendly artwork modal with Escape and close controls.
- Pointer tilt and portrait parallax on fine-pointer devices.
- Official YouTube embeds and direct YouTube links.
- Responsive layouts for 390 px, 768 px, and 1440 px targets.
- `prefers-reduced-motion` support.
- Lazy-loaded portfolio images and embeds.

## Asset sources

- Graphic design: original portfolio exports supplied by Rizki, also available
  through `@uwiberani`.
- Web screenshots: original IMAN IN MOTION screenshots supplied by Rizki.
- Video: official YouTube embeds only; no full video is included.
- Portrait: user-supplied photo of Rizki.

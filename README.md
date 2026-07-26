# Blue Performance Angular Landing Page — Smooth Astronaut Edition

## Run in VS Code

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Hero blending changes

The astronaut artwork was processed into `public/hero-astronaut-smooth.png`.

The processing:
- removes the rectangular background edge;
- suppresses small dark rocks and isolated granular fragments;
- feathers the alpha channel;
- applies light edge-preserving smoothing;
- blends the artwork with the existing navy/electric-blue hero background.

Edit the artwork position in `src/app/app.component.css` under `.astronaut-art`.

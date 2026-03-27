# SafeIoT Website

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

## Setup

Install dependencies (only needed once, or after pulling new changes):

```bash
npm install
```

## Local Development

Start the dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. Changes to source files are reflected instantly without restarting.

Currently, **it is recommended to edit the following files and save them to adjust the website content**:

- safeiot-website/website/src/pages/index.astro
- safeiot-website/website/src/pages/register.astro

If the changes do not take effect, you can re-run `npm run dev`.



## Build for Production

```bash
npm run build
```

Output is written to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

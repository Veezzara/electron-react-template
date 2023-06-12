import path from "path";

const root = path.join(__dirname, "../");

const src = path.join(root, "src");
const renderer = path.join(src, "renderer");
const main = path.join(src, "main");

const release = path.join(root, "release");
const releaseApp = path.join(release, "app");
const dist = path.join(releaseApp, "dist");
const build = path.join(release, "build");
const preload = path.join(root, "preload");

export default {
  root,
  src,
  renderer,
  main,
  release,
  releaseApp,
  dist,
  build,
  preload,
};

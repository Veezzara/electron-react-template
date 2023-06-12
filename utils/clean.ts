import { rimraf } from "rimraf";
import projectPaths from "../config/project-paths";

[projectPaths.dist, projectPaths.build, projectPaths.preload].forEach((p) => {
  rimraf.sync(p);
});

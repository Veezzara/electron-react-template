import { URL } from "url";
import path from "path";
import EnvOption from "../../../utils/env-options";

const resolveHtmlPath = (htmlFileName: string) => {
  if (process.env.NODE_ENV === EnvOption.Development) {
    const port = process.env.PORT || 8080;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }

  return `file://${path.resolve(__dirname, "../renderer/", htmlFileName)}`;
};

export default resolveHtmlPath;

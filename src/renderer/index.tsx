import { createRoot } from "react-dom/client";
import App from "./app";

const root = document.getElementById("root");

if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
}

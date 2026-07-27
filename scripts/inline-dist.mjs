import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDirectory = resolve("dist");
const assetsDirectory = resolve(distDirectory, "assets");
const indexPath = resolve(distDirectory, "index.html");

const entries = await readdir(assetsDirectory, { withFileTypes: true });
const cssFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith(".css"))
  .map((entry) => entry.name);
const jsFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith(".js"))
  .map((entry) => entry.name);

if (cssFiles.length === 0 || jsFiles.length === 0) {
  throw new Error("Expected one or more generated CSS and JavaScript files.");
}

const css = (
  await Promise.all(
    cssFiles.map((file) => readFile(resolve(assetsDirectory, file), "utf8")),
  )
).join("\n");
const javascript = (
  await Promise.all(
    jsFiles.map((file) => readFile(resolve(assetsDirectory, file), "utf8")),
  )
)
  .join("\n")
  .replaceAll("</script", "<\\/script");

let html = await readFile(indexPath, "utf8");
html = html.replace(
  /<link\b[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']+\.css["'][^>]*>/gi,
  () => `<style>${css}</style>`,
);
html = html.replace(
  /<script\b[^>]*type=["']module["'][^>]*src=["'][^"']+\.js["'][^>]*><\/script>/gi,
  () => `<script type="module">${javascript}</script>`,
);

if (
  /<link\b[^>]*href=["'][^"']+\.css["'][^>]*>|<script\b[^>]*src=["'][^"']+\.js["'][^>]*>/i.test(
    html,
  )
) {
  throw new Error("The self-contained build still references generated CSS or JS.");
}

await writeFile(indexPath, html, "utf8");
await Promise.all(
  [...cssFiles, ...jsFiles].map((file) =>
    rm(resolve(assetsDirectory, file), { force: true }),
  ),
);

console.log("dist/index.html now contains inline CSS and JavaScript.");

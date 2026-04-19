import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import fastGlob from "fast-glob";
import { codeToHtml } from "shiki";

const { 2: filePattern } = process.argv;
if (!filePattern) {
  console.error("Pattern missing");
  process.exit(1);
}

for (const file of await fastGlob(filePattern)) {
  const directory = path.dirname(file);
  const content = await readFile(file, "utf-8");

  const html = await codeToHtml(content, {
    lang: "css",
    theme: "catppuccin-latte",
  });

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      ${html}
    </div>
  </foreignObject>
</svg>
`;

  const newPath = path.join(directory, "styles.svg");

  await writeFile(newPath, svg);
  console.log(`Generated svg file: ${newPath}`);
}

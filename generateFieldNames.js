import fs from "fs";

const generateFieldNames = () => {
  const input = "./src/candidFieldNames.txt";
  const output = "./src/candidFieldNames.ts";

  const lines = fs
    .readFileSync(input, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const content = `// Generated using generateFieldNames.js.\n// Do not edit manually!\n\nimport { createNameLookup } from "./candidDecoder.js";\nconst candidFieldNames = ${JSON.stringify(lines, null, 2)};\nexport const fieldNames = createNameLookup(candidFieldNames);\n`;
  console.error(content);

  fs.writeFileSync(output, content);
};

generateFieldNames();

import { build } from "esbuild";

await build({
  entryPoints: ["src/candidDecoder.ts"],
  outdir: "dist",
  bundle: false,
  format: "esm",
  platform: "node",
  sourcemap: true,
  target: ["es2020"],
});

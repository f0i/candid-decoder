import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["example/candid.ts"],
  outfile: "example/candid.js",
  bundle: true,
  minify: true, // Minify the output for production
  sourcemap: true, // Generate source maps for debugging
  target: "esnext", // The JavaScript version to target
  platform: "browser", // Ensure it's bundled for the browser
  loader: {
    ".ts": "ts", // Tell esbuild to handle TypeScript files
  },
});

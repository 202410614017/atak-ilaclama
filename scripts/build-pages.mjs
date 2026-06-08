import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const repo = process.env.GITHUB_REPOSITORY ?? "local/atak-ilaclama";

process.env.GITHUB_PAGES = "true";
process.env.GITHUB_REPOSITORY = repo;

spawnSync("node", ["scripts/build-content.mjs"], { stdio: "inherit", shell: true });

const build = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, GITHUB_PAGES: "true", GITHUB_REPOSITORY: repo },
});

if (build.status !== 0) process.exit(build.status ?? 1);

writeFileSync(join("out", ".nojekyll"), "");
console.log("GitHub Pages build ready in /out");

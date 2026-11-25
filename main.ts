// Two Robots in an Elevator — make.fun bounty
// u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
// Writes exactly one line of awkward robot small talk to entry.txt.
// Node 22 stdlib only. No network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Nice weather. My humidity sensor reads 89% inside your chassis. ... Scheduled maintenance cycle? ... Ah. The leak. I will face the wall and initiate 'Silent Mode'.";

// Gate guard: the entry must be a single line, 1-200 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line byte-exact, with no trailing newline added,
// so the file holds exactly the 163 characters the gate counts.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

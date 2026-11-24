// One-Line Robot Wedding Vows — entry for u-kreutzx-one-line-robot-wedding-vows-a154ba4b.
// Writes the single vow line to entry.txt inside the output folder.
// The output folder comes from MAKEFUN_OUTPUT_DIR, falling back to /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: one line of wedding vows for a robot couple.
// It is a promise (love through updates, outages and low battery) with the
// joke paying off in the last few words, and it is emitted exactly as-is.
const ENTRY =
  "I promise to love you through every update, every outage, and every low-battery warning, and never to unplug you in your sleep.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);

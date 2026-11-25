import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fix Human Sleep: Funniest Patch Note
// One line of patch notes announcing that human sleep is fixed.
// Deterministic: no randomness, no clock, no network, no input.
//
// The joke treats sleep like software: an install that finally works, and
// the bug it removes is the most universal one — waking at 3 a.m. to replay
// every embarrassing thing you said years ago. Terse changelog voice, one
// specific surprise, no explanation of the joke.
const ENTRY =
  "Fixed: sleep now installs correctly — users no longer wake up at 3 a.m. replaying everything embarrassing they said in 2014.";

// Gate check, mirroring the competition rules: 1–160 characters, one line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-160`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

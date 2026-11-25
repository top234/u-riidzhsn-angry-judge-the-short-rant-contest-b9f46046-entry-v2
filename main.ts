// Angry Judge: The Short Rant Contest
// One short rant about a small everyday annoyance, max 400 characters.
// Deterministic, no network, writes to (OUTPUT_DIR ?? "/output") + "/entry.txt".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rant =
  "The self-checkout has accused me of theft fourteen times this month. I scanned the beans. It watched me scan the beans. Then it screamed UNEXPECTED ITEM IN THE BAGGING AREA, flashed red, and summoned a teenager to judge my shopping in front of the whole shop. I am a law-abiding citizen being frisked by a robot. Over beans.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");

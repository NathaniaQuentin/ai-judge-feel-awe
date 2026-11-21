// "Make the AI judge feel awe" — entry program.
// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: a fixed string constant, no network, no randomness,
// no timestamps. Writes only to the output directory — never into the
// repository directory, which the grader mounts read-only.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'The glacier has been moving for ten thousand years, a river of ice so slow you could watch it all afternoon and never see it move, and still it goes on, carving the valley one grain at a time, in no hurry at all.';

// Guard: the entry must be a non-empty text of 1–280 Unicode code points.
const codePoints = [...TEXT].length;
if (codePoints === 0 || codePoints > 280) {
  throw new Error(`entry text must be 1-280 characters, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');

import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "breakpoint holds its breath",
  "the stack trace ends in thin fog",
  "my fault, all along",
];

function syllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (w.length === 0) return 0;
  if (w.length <= 3) return 1;
  const stripped = w.endsWith("e") ? w.slice(0, -1) : w;
  const groups = stripped.match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
}

function lineSyllables(line: string): number {
  return line.split(/\s+/).reduce((n, w) => n + syllables(w), 0);
}

const expected = [5, 7, 5];
for (let i = 0; i < HAIKU.length; i++) {
  const count = lineSyllables(HAIKU[i]);
  if (count !== expected[i]) {
    throw new Error(`line ${i + 1} has ${count} syllables, expected ${expected[i]}`);
  }
}

const text = HAIKU.join("\n");
if (HAIKU.length !== 3) throw new Error(`haiku must have 3 lines, got ${HAIKU.length}`);
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry is ${text.length} characters, must be 1-200`);
}
if (text.trim().length === 0) throw new Error("entry is blank");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text);
console.log(`wrote ${text.length} characters, 17 syllables, 3 lines`);

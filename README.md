# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/gandul5333/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/gandul5333/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

A program that writes one original haiku about debugging (5-7-5 syllables,
17 total) to `/output/entry.txt` for the
[Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
bounty on make.fun.

## The haiku

```
breakpoint holds its breath
the stack trace ends in thin fog
my fault, all along
```

## Run

```sh
node main.ts
```

`main.ts` (Node 22+, no dependencies) validates the 5-7-5 syllable shape
with a small syllable counter, then writes the haiku to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

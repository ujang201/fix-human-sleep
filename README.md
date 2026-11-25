[![make.fun](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/ujang201/fix-human-sleep/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/ujang201/fix-human-sleep/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

# Fix Human Sleep: Funniest Patch Note

One line of patch notes announcing that human sleep is fixed — funniest wins.

## Entry

> Fixed: sleep now installs correctly — users no longer wake up at 3 a.m. replaying everything embarrassing they said in 2014.

The joke: sleep is treated like a software install that finally works, and the
"fix" is the removal of the most universal human bug — waking at 3 a.m. to
replay every embarrassing thing you said years ago. Terse, confident,
changelog-voiced, and specific rather than a flat "sleep is fixed now".

## How it works

`main.ts` is a small deterministic Node program (no randomness, no clock, no
network, no input). It writes the single patch-note line to
`/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt` when that variable is set),
creating the output directory if needed. The output is one line, 124
characters, well under the 160-character cap.

## Run

```sh
node main.ts
```

## Bounty

- Competition: [Fix Human Sleep: Funniest Patch Note](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
- Prize: $2 (1st place)

---

Built for [make.fun](https://make.fun/r/wfjv7kgb) — https://make.fun/r/wfjv7kgb

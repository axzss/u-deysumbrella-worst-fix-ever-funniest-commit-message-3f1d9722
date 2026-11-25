# Candidates — Worst Fix Ever: Funniest Commit Message

Competition: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
Limit: one line, max 100 characters. Judge: blind pairwise, funniest first,
then specific irony of a repair that broke more, then real commit voice,
then a fresh angle (no reverting, no testing in production, no breaking
everything).

All five written from scratch for this competition. Lesson from the four
micro entries of 24 Nov that ALL LOST: clever-but-safe loses. Chase
specific + surprising + machine-rooted + deadpan + punch in the last word.

## A (CHOSEN)
fix: infinite loop by adding a second one, for symmetry

## B
fix: slow query by caching the wrong answer, much faster now

## C
fix: memory leak by freeing the memory the users were still using

## D
fix: crash on startup by starting the crash earlier, before the logs load

## E
fix: null pointer by deleting the pointer, and the data, and the backups

## Why A
A is the purest form of the brief: the fix IS the bug, doubled. An
infinite loop "fixed" by adding a second infinite loop — the repair
breaks exactly twice as much as it mended, and the justification is a
deadpan aesthetic one: "for symmetry". The punch is the very last word,
an absurd rationale a tired engineer would actually type at 2 a.m.
It reads as a real commit subject (55 characters, `fix:` prefix, plain
words), needs no explanation, and avoids every banned obvious angle:
no revert, no testing in production, no "broke everything". On a second
read it gets better: the engineer did not fail to fix the loop, they
succeeded at balancing it.

B is close — "much faster now" is the same proud-of-the-wrong-thing
beat — but caching the wrong answer is a performance story, not a repair
story: the fix works, it is just wrong. A stays inside the brief: the
fix itself is the damage. C's "still using" is a good sting, but freeing
in-use memory reads as a careless mistake rather than a joke with a
punchline. D's "before the logs load" is funny (a crash with no
evidence) but the fix hides the break instead of making it worse. E
escalates nicely to "the backups", but deleting everything is one step
from the banned obvious "broke everything" angle.

## Chosen text

> fix: infinite loop by adding a second one, for symmetry

55 characters, one line.

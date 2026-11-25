// Worst Fix Ever: Funniest Commit Message
// make.fun bounty: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
//
// Writes the single-line commit message to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to the current directory), and prints it to stdout.
// No trailing newline in the file or on stdout.
// Node 22, standard library only, no network.
//
// The commit message, written from scratch for this competition: a fix
// for an infinite loop that adds a second infinite loop, justified with
// the deadpan aesthetic excuse "for symmetry". The repair literally
// doubles the disease, and the engineer is faintly proud of the
// balance. A failure mode only a tired engineer has — fixing a loop by
// adding a loop — with the punch ("for symmetry") saved for the very
// last word. No revert, no testing in production, no breaking
// everything: the fix is precise, specific, and exactly twice as bad.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "fix: infinite loop by adding a second one, for symmetry";

// Gate self-check: the scorer requires 1-100 UTF-8 chars, not only whitespace.
if (entry.length < 1 || entry.length > 100 || !entry.trim()) {
  throw new Error("entry must be 1-100 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);

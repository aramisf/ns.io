#!/usr/bin/env node

// Take data from `process.stdin` and pipe it to `process.stdout`.
// With `.pipe()`. `process.stdin.pipe()` to be exact.
// Don't overthink this.

process.stdin.pipe(process.stdout);

// Here's the reference solution:
//
// process.stdin.pipe(process.stdout);

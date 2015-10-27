#!/usr/bin/env node

// Instead of transforming every line as in the previous "TRANSFORM" example, for
// this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered. For example
// given this input:
//
//     One
//     Two
//     Three
//     Four
//
// Your program should output:
//
//     one
//     TWO
//     three
//     FOUR
//
// You can use the `split` module to split input by newlines. For example:
//
//     var split = require('split');
//     process.stdin
//         .pipe(split())
//         .pipe(through2(function (line, _, next) {
//             console.dir(line.toString());
//             next();
//         }))
//     ;
//
// `split` will buffer chunks on newlines before you get them. In the previous
// example, we will get separate events for each line even though all the data
// probably arrives on the same chunk:
//
//     $ echo -e 'one\ntwo\nthree' | node split.js
//     'one'
//     'two'
//     'three'
//
// Your own program should use `split` in this way, but you should transform the
// input and pipe the output through to `process.stdout`.
//
// Make sure to `npm install split through2` in the directory where your solution
// file lives.

var split = require('split');
var through2 = require('through2');
var l = 1;

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        if (l % 2 == 1) {
          console.log(line.toString('utf8').toLowerCase());
        }
        else {
          console.log(line.toString('utf8').toUpperCase());
        }
        l++;
        next();
      })
    )
    .pipe(process.stdout);

// Suggested solution
// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;

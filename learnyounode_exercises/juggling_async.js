#!/usr/bin/env node

//  JUGGLING ASYNC Exercise 9 of 13
//
// This problem is the same as the previous problem (HTTP COLLECT) in that you
// need to use http.get(). However, this time you will be provided with three URLs
// as the first three command-line arguments.
//
// You must collect the complete content provided to you by each of the URLs and
// print it to the console (stdout). You don't need to print out the length, just
// the data as a String; one line per URL. The catch is that you must print them
// out in the same order as the URLs are provided to you as command-line
// arguments.

var http = require('http')
var urls = process.argv.slice(2)
var count = urls.length;
var lines = []

for (var i=0; i<urls.length; i++) {
  getUrl(i)
}

function getUrl (i) {
  var str = ''
  http.get(urls[i], function (response) {

    response.on('data', function (data) {
      str += data.toString()
    })

    response.on('end', function () {
      lines[i] = str
      done()
    })
  })
}

function done () {
  if (--count !== 0) return
  console.log(lines.join('\n'))
}

// Here's the official solution in case you want to compare notes:
//
// ───────────────────────────────────────────────────────────────
//  var http = require('http')
//  var bl = require('bl')
//  var results = []
//  var count = 0
//  
//  function printResults () {
//    for (var i = 0; i < 3; i++)
//      console.log(results[i])
//  }
//  
//  function httpGet (index) {
//    http.get(process.argv[2 + index], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err)
//          return console.error(err)
//  
//        results[index] = data.toString()
//        count++
//  
//        if (count == 3)
//          printResults()
//      }))
//    })
//  }
//  
//  for (var i = 0; i < 3; i++)
//    httpGet(i)



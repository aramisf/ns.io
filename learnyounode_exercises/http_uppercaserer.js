#!/usr/bin/env node

//  HTTP UPPERCASERER
//  Exercise 12 of 13
//
// Write an HTTP server that receives only POST requests and converts incoming
// POST body characters to upper-case and returns it to the client.
//
// Your server should listen on the port provided by the first argument to your
// program.

var portNum = process.argv[2]

var http = require('http')
// TODO: find if there is a way to make the same thing without using third-party
// libraries
var map = require('through2-map')

var server = http.createServer(function(req, res){
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})


server.listen(portNum)

// Here's the official solution in case you want to compare notes:
//
// ───────────────────────────────────────────────────────────────
// var http = require('http')
// var map = require('through2-map')
// 
// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')
// 
//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })
// 
// server.listen(Number(process.argv[2]))

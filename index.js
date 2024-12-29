#! /usr/bin/env node

import https from 'node:https';
import { argv } from 'node:process';
import parseHTML from './parse.js';

console.log("Crawling website...");

const options = {
  hostname: argv[2],
  path: '/',
  method: 'GET',
  port: 443
};

let dataChunks = []

const req = https.request(options, (res) => {

  res.on('data', (chunk) => {
    dataChunks.push(chunk)
  })

  res.on('end', () => {
    const htmlString = Buffer.concat(dataChunks).toString()
    parseHTML(htmlString, argv[3])
  });
});


req.on('error', (e) => {
  console.error(e);
});

req.end()

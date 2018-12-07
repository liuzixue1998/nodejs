#!/usr/bin/node

const fs=require('fs');
const log=console.log;

const fileName=process.argv[2];
var buf=fs.readFileSync(fileName);

log('BMP file width:',buf.readUInt32E(18));
log('BMP file heigth',buf.readUInt32E(22));
log('BMP file color deapth',buf.readUIne32E(28));

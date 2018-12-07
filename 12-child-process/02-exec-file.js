#!/usr/bin/node

const cp=require('child_peocess');

cp.execFile('./02-child.js',(err,stdout)=>{
  console.log(stdout);
})

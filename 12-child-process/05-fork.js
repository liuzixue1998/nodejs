#!/usr/bin/node

const cp=require('child_process');

console.log('i am father process ,PID: ',process.pid);
cp.fork('./02-child.js');

global.setTimeout(()=>{
  console.log('i am father over');
  process.exit();
},6000)

#!/usr/bin/node

const cp=require('child_process');

console.log('i am father process, PID:',process.pid);

var child=cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});

child.unref();

setTimeout(()=>{

  console.log('5seconds passed,Father game over!  ');
  process.exit(0);
},5000)

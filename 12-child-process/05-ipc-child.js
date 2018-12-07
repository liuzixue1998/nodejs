#!/usr/bin/node

const cp=require('child_process');

console.log('i am father process PID:',process.pid);

process.send('child process is start! PID:',process.pid);

process.on('message',(msg)=>{
  console.log('message from father',msg);
})

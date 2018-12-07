#!/usr/bin/node

console.log('I am child peocess,PID:',process.pid);

var timer=global.setInterval(()=>{
  console.log('timer',Date.now());
},1500);

global.setTimeout(()=>{
  global.clearInterval(timer);
},5000);

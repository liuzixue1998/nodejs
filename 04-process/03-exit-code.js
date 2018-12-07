#!/usr/bin/node

const log=console.log;
const err=console.error;
const arg=process.argv[2];

if(typeof(arg)==='undefined'||isNaN(number(arg))){
  err('命令行参数不正确');
  process.exit(1);
}else{
  log('退出码',arg);
  process.exit(arg);
}

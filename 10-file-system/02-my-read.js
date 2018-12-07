#!/usr/bin/node

const fs=require('fs');
const src=process.argv[2];

if(typeof(src)==='undefined' || process.argv.length !==3){
  console.error('命令行参数不正确！')
}

try{
  console.log(src,'->',fs.readlinkSync(src));
}catch(err){
  console.error(err.message);
  process.exit(2);
}

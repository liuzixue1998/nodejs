#!/usr/bin/node

const log=console.log;
const arg=process.argv[2];

if(typeof(arg)==="undefined"||arg==='--help'||arg==='-h'){
  help();
}else{
  calc();

}

function help(){
  const msg='';
    log(msg);
}

function calc(){
  log(arg+'=%s',eval(arg));
}

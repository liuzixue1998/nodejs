!/usr/bin/node

const cp=require('child_process');
var cmd=cp.fork('./05-ipc-child.js');
global.setTimeout(()=>{
  cmd.send('i am father PID:',process.pid);

},3000);

process.on('message',(msg)=>{
  console.log('msg from child',msg);
});

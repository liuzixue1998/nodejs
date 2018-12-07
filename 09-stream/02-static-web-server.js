#!/usr/bin/node

const http=require('http');

http.createServer((res,req)=>{


  console.log(req);
  res.end('hello');
}).listen(8080);

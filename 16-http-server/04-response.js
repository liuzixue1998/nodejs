#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  if(req.url==='/'){
  var html=''+
  '<!DOCTYPE html>'
  +'<html>'+'<head>'+'<title>hello world </title>'+'</head>'
  +'<body><h1>hello world</head></body><html>';

res.statusCode=200;
res.setHeader('content type ','text/html');
res.writeHead(200,{
  'content type':'text/html';
});
res.end(html);

  
  }else{

  }
}).listen(8080);

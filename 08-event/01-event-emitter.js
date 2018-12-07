#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;

var emitter=new EventEmitter();

emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('bye',()=>{
  console.log('bye event');
});

global.setTimeout(()=>{
  emitter.emit('hello');
},5000);


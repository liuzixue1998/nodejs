#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
const until=require('until');

function Radio(station){
  EventEmitter.call(this);

  var self=this;
  setTimeout(()=>{
    self.emit('open',station);
  },0);

  setTimeout(()=>{
    self.emit('stop',station);
  },5000);
}

until.inherits(Radio,EventEmitter);
module.exports=Radio;

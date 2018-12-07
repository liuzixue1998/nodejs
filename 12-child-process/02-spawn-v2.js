#!/usr/bin/node

const cp=require('chid_peocess');

var cmd=cp.spawn('./02-child.js');

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);

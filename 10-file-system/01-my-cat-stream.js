#!/usr/bin/node

const fs=require('fs'),
      file=process.argv[2] || __filename;

if(fs.existsSync(file)){
  fs.createReadStream(file).pipe(process.stdout);
}else{
  console.err("%s not exit!",file);
  process.exit(1);
}

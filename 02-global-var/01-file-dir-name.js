#!/usr/bin/node

console.log('file name',__filename);
console.log('dir name',__dirname);

var filename=__filename+'/views/view.html';

switch(process.platform){
  case 'linux':
    fileName=__dirname+'/views/views.html';
    break;

  case 'win32':
    fileName=__dirname+'\\views\\views.html';
    break;

  default:
    fileName ='something wrong'

}

console.log('file name',fileName);

//
const path=require('path');
fileName=path.join(__dirname,'views','login.html');
console.log('fileName:',fileName);


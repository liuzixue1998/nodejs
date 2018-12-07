#!/usr/bin/node

const http=require('http'),
      cheerio=require('cheerio'),
      log=console.log;

var addr='http://edu.51cto.com/courselist/index-zh5.html';

http.get(addr,(res)=>{
  var result='';

  res.on('data',(data)=>{
    result+=data.toString('utf8');

  });

  res.on('end',()=>{
    var $=cheerio.load(result);
    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text();
      var cTime=$(this).find('p.f1').text();
      var cTarget=$(this).find('div.course_target').text();
      var cUrl=$(this).find('a').attr('href');

      if(cTime==='') return;

      log('课程名称',cName);
      log('课程数量',cTime);
      log('课程目标',cTarget.trim());
      log('课程网址',cUrl.trim());
      log('');
    })
  })
})

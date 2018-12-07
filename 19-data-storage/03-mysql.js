#!/usr/bin/node

const mysql=require('mysql');

const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ddd',
  database:'test'
});

con.connect();

//operation db

const sql='select * from books';
con.query(sql,function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
})

const sqll='insert into books(book_id,title,status) values(?,?,?)';
con.query(sqll,[2,'node.js',0],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});

//gai
con.query('update books set title=? where book_id=?',
    ['hello world',103],(err,result)=>{
      if(err){
        console.error(err);
        process.exit(100);
      };
      console.log(result);
    } );

//shan
con.query('delete from books where book_id=?',[103],(err,result)=>{
  if(err){
    console.erro(err);
    proce.exit(100);
  }
  console.log(result);
})


con.end();


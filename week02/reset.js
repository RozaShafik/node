'use strict';
const fs=require ("fs");
const myFile="./fs.txt";

const reset = fs.unlink(myFile,err => {
  if(err) throw err.message;
  console.log("deleted");
});

module.exports = reset;

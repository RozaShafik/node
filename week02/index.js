'use strict';
// TODO: Write the homework code in this file
const reset = require('./reset');
const append = require('./add');
const read = require('./list');
const remove = require('./remove');
const help = require('./help');
switch (process.argv[2]) {
  case 'help':
  case '/':
  default:
      help();
      break;

  case 'list':
      read().then(data => {
          console.log(` to do list:\n${data}`);
      });
      
      break;

  case 'add':
      append(...process.argv.slice(3))
          .then(() => read())
          .then(data => {
              console.log(`Item ${process.argv[3]} added`);
              console.log(`\n to do list:\n${data}`);
          })
          .catch(console.error);
      break;

  case 'remove':
      const index = process.argv[3];
      remove(index);
      read().then(data => {
          console.log(`to do list:\n${data}`);
      });
      break;

  case 'reset':
      reset();
      read().then(data => {
          console.log(` to do list:\n${data}`);
      });
      break;
}

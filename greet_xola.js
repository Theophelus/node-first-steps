var figlet = require('figlet');
const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');
const styledMessage = chalk.bgGreen.black(greet('Xola'));
const msg = chalk.bgBlue.black(greet('Goran'));
console.log(styledMessage);
console.log(msg);

figlet('Hello World!', function(err, data){
  if(err){
    console.log('Something went wrong..!');
    console.dir(err);
  }
  console.log(data);
});

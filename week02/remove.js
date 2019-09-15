const fs = require('fs');
const reset = require('./reset');
const remove = function(number) {
    let listContent = fs.readFileSync('./fs', 'UTF-8');
    let listLineArray = listContent.split('\n');

    if (listLineArray.length == 0) {
        console.log('An empty lis');
    } else if (number >= 0 && number < listLineArray.length) {
        listLineArray.splice(number, 1);
        reset();
        listLineArray.forEach(item => {
            fs.appendFileSync('./fs.txt', item + '\n');
        });
    } else {
        console.log('wrong index number!');
    }
};
module.exports=remove;

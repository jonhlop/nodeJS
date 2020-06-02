const fs = require('fs');

fs.readdir('.', (err, files) => {

})

fs.readFile('./mensajes.txt', 'UTF-8', (err, data) => {
    console.log(data.toString().split('\n'));
});
const chalk = require('chalk');
const axios = require('axios');
const tokengn = require('tokengn');

const operaciones = require('./lib/operaciones');
const mensajes = require('./lib/mensajes');

console.log(operaciones.sum(3, 9));
console.log(mensajes.despedida);

console.log(chalk.bgWhite.blue('Hola Mundo'));

console.log(tokengn({ length: 32 }));

axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        return response.data;
    }).then(data => {
        // data.results.forEach(item => console.log(item.name));
    });

console.log(__dirname);
console.log(__filename);

console.log(process.argv);
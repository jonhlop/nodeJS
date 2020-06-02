// con readdir sacar todos los ficheros de la carpeta "ficheros"
// leer con readFile unicamente aquellos ficheros con extensión .md

const fs = require('fs');

fs.readdir('./ficheros', (err, files) => {
    for (let file of files) {
        if (file.endsWith('.md')) {
            fs.readFile(`./ficheros/${file}`, (err, data) => {
                console.log(data.toString());
            })
        }
    }
});

fs.readdir('./ficheros', (err, files) => {
    files.filter(file => file.endsWith('.md'))
        .forEach(file => {
            fs.readFile(`./ficheros/${file}`, (err, data) => {
                console.log(data.toString());
            })
        });
});
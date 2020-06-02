const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

rl.question('¿Cuál es tu nombre? ', (answer) => {
    fs.appendFileSync(`./ficheros/${answer}.md`, `Fichero de ${answer}\n--------\n`);
    rl.setPrompt('Di una frase (escribe exit para salir) ');
    rl.prompt();

    rl.on('line', (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
        } else {
            fs.appendFile(`./ficheros/${answer}.md`, `${input}\n`, (err) => {
                if (err) console.err(err.message);
            });
            rl.prompt();
        }
    });
});
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

rl.question('¿Cuál es tu nombre? ', (answer) => {
    const streamW = fs.createWriteStream(`./ficheros/${answer}.md`);
    streamW.write(`Fichero de ${answer}\n--------\n`);

    rl.setPrompt('Di una frase (escribe exit para salir) ');
    rl.prompt();

    rl.on('line', (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
            streamW.close();
        } else {
            streamW.write(`${input}\n`);
            rl.prompt();
        }
    });
});
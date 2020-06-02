var questions = [
    "¿Cual es tu nombre?",
    "¿Cual es tu edad?",
    "¿Cual es tu lenguaje de programación preferido?"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write("   >   ");
}

process.stdin.on("data", function (data) {
    // process.stdout.write("\n" + data.toString().trim() + "\n");
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    console.log(answers);
});

ask(0);

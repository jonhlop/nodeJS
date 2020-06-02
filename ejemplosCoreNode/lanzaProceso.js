const { exec } = require('child_process');

exec('ls', (err, data) => {
    console.log(data);
});
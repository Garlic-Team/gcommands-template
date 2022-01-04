// https://garlic-team.js.org/guide/inhibitors/first-inhibitor.html

const { Listener } = require('gcommands');

new Listener({
    event: 'debug',
    run: (string) => {
        console.log(string);
    }
})
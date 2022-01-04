import { Listener } from "gcommands";

new Listener({
    event: 'debug',
    name: 'debug',
    run: (string) => {
        console.log(string);
    }
})
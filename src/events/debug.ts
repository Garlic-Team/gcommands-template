import { Listener } from "gcommands";

new Listener({
    event: 'debug',
    run: (string) => {
        console.log(string);
    }
})
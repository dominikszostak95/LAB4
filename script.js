"use strict";
let someArray = [1, "string", false];
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        process.stdout.write((i * j).toString() + " ");
    }
    console.log();
}

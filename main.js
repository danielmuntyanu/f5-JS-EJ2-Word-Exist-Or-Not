import { wordExist } from "./js/word-exist.js";


function app() {
    console.log("=== WORD EXIST OR NOT ===");
    const word = input("Escribe una palabra: "); 
    const result = wordExist(word);

    console.log(`English en ${word}: ${result}`);
}

app();

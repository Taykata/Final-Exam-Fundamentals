function messageTranslator(input) {

    let messages = [];
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let singleMessage = input.shift();
        messages.push(singleMessage);
    }

    for (let text of messages) {
        let pattern = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}]/g;
        let match = pattern.exec(text);

        if (match != null) {
            let index = text.indexOf('[');
            let encrypted = text.slice(index + 1, text.length - 1);
            encrypted = encrypted.split('');
            let buff = '';

            for (let uncrpyted of encrypted) {
                if (uncrpyted != ' ') {
                    let char = uncrpyted.charCodeAt();
                    buff += char + ' ';
                }
            }

            let result = text.slice(0, index).split('!').join('');
            console.log(`${result} ${buff.trimEnd()}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

// messageTranslator(["2",
//     "!Send!:[IvanisHere]",
//     "*Time@:[Itis5amAlready"]);

messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"]);
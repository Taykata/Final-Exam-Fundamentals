function stringGame(input) {

    let string = input.shift();
    let fullCommand = input.shift();

    while (fullCommand != 'Done') {
        let tokens = fullCommand.split(' ');
        let command = tokens[0];

        if (command === 'Change') {
            let char = tokens[1];
            let replacenemt = tokens[2];

            while (string.includes(char)) {
                string = string.replace(char, replacenemt);
            }
            console.log(string);
        } else if (command === 'Includes') {
            let substring = tokens[1];

            if (string.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'End') {
            let substring = tokens[1];

            if (string.endsWith(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        } else if (command === 'FindIndex') {
            let char = tokens[1];
            let index = string.indexOf(char);
            console.log(index);
        } else if (command === 'Cut') {
            let startIndex = Number(tokens[1]);
            let count = Number(tokens[2]);

            string = string.slice(startIndex, startIndex + count);
            console.log(string);
        }

        fullCommand = input.shift();
    }

}

// stringGame(["//Th1s 1s my str1ng!//",
//     "Change 1 i",
//     "Includes string",
//     "End my",
//     "Uppercase",
//     "FindIndex I",
//     "Cut 5 5",
//     "Done"]);

stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"]);
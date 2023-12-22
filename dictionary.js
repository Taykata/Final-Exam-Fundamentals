function dictionary(input) {

    let notebook = {};

    let wordsWithDescription = input.shift().split(' | ');

    for (let i = 0; i < wordsWithDescription.length; i++) {
        let [word, description] = wordsWithDescription[i].split(': ');

        if (word in notebook) {
            notebook[word].push(description);
        } else {
            notebook[word] = [description];
        }
    }

    let testWords = [];
    let wordsForTest = input.shift().split(' | ');

    for (let word of wordsForTest) {
        testWords.push(word);
    }

    let command = input[0];

    if (command === 'Test') {
        for (let i = 0; i < testWords.length; i++) {
            if (testWords[i] in notebook) {
                console.log(`${testWords[i]}:`);

                for (let j = 0; j < notebook[testWords[i]].length; j++) {
                    console.log(` -${notebook[testWords[i]][j]}`);
                }
            }
        }
    } else if (command === 'Hand Over') {
        let keys = Object.keys(notebook);
        console.log(keys.join(' '));
    }

}

// dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
//     "fish | domino",
//     "Hand Over"]);

// dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//     "care | kitchen | flower",
//     "Test"]);

dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"]);
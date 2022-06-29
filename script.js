// Joke opening lines go in this array
const openerArray = [];

// Joke punchlines go in this array
const punchlineArray = [];

// Generate random opening line and random punchline
const generateRandomJoke = (opener, punchline) => {
    let openerRandomNumber = Math.floor(Math.random() * opener.length);
    let punchlineRandomNumber = Math.floor(Math.random() * punchline.length);
    console.log(opener[openerRandomNumber]);
    console.log(punchline[punchlineRandomNumber]);
}

generateRandomJoke(openerArray, punchlineArray);
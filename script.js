// Joke opening lines go in this array
const openerArray = ["My wife told me to stop impersonating a flamingo.","I was wondering why the frisbee kept getting bigger and bigger,","I heard there were a bunch of break-ins over at the car park.","I want to die peacefully in my sleep, like my grandfather.","When life gives you melons,","Don’t you hate it when someone answers their own questions?","My wife just found out I replaced our bed with a trampoline."];

// Joke punchlines go in this array
const punchlineArray = ["I had to put my foot down.", "but then it hit me.","That is wrong on so many levels.","Not screaming and yelling like the passengers in his car.","you might be dyslexic.","I do.","She hit the roof!"];

// Generate random opening line and random punchline
const generateRandomJoke = (opener, punchline) => {
    let openerRandomNumber = Math.floor(Math.random() * opener.length);
    let punchlineRandomNumber = Math.floor(Math.random() * punchline.length);
    console.log(opener[openerRandomNumber]);
    console.log(punchline[punchlineRandomNumber]);
}

generateRandomJoke(openerArray, punchlineArray);
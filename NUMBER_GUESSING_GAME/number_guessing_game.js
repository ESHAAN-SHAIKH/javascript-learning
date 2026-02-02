
const prompt = require("prompt-sync")();

//MAX_LIVES  used const instead of let because we do want to create accidental bug
const MAX_LIVES=20;
const MIN=0;
const MAX=100;


console.log(` Welcome to the Random Number Guessing Game!
Guess a number between ${MIN} and ${MAX}.
Careful — you only have ${MAX_LIVES} lives!    
    `)


//we used 101 because Math.random() gives value between 0-1 but 1 is not included in it
const secretNumber=Math.floor(Math.random()*(MAX+1));
let lives=MAX_LIVES;
while(lives>0){
const guess=Number(prompt(`Enter the number (lives left ${lives}): `));
if(Number.isNaN(guess)){
    console.log(`Enter a valid number between`);
    continue;
}
if (guess < MIN || guess > MAX) {
  console.log(`❌ Number must be between ${MIN} and ${MAX}`);
  continue;
}

if(secretNumber===guess){
    console.log("Congrats you win!!!!!");
    break;
}   
    console.log(secretNumber>guess?`Too low`:`Too high`);
lives--;
}

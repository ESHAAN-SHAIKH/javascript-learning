
const prompt = require("prompt-sync")();
console.log(`Welcome to random number guessing game here you have to guess number ranging from 0-100
Careful you only have 20 lives"    
    `)
//we used 101 because Math.random() gives value between 0-1 but 1 is not included in it
const random_number=Math.floor(Math.random()*101);
let n=20;
while(n>=0){
const user_guess=Number(prompt(`Enter the number you have ${n} lives left`));
if(random_number==user_guess){
    console.log("Congrats you win!!!!!");
    break;
}
else{
   
    if(random_number>user_guess){
      console.log("too low");
    }
    else{
        console.log("too high");
    }
    
}


n--;
}


const readline = require('readline') 
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function exp(user_input){
    console.log(user_input);
}
rl.question("Enter the calculation", (user_input)=>{
    const input=user_input;
    exp(input);
    rl.close();
})

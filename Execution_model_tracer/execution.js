
function four(callStackTrace){
callStackTrace.push("four");
console.log("Simulated Call Stack:");
console.log(callStackTrace.join("->"));
}

function three(callStackTrace){
callStackTrace.push("three");
four(callStackTrace);
}

function two(callStackTrace){
callStackTrace.push("two");
three(callStackTrace);
}

function one(callStackTrace){
callStackTrace.push("one");
two(callStackTrace)
}

console.log("\n--- Part 1: Call Stack Demonstration ---");
one([]);
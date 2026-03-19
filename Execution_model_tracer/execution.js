
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

function demonstrateReferences(){
    console.log("\n--- Part 2: Reference vs Value ---");
  let a = 10;
  let b = a;
   b = 20;

  console.log("Primitive values:");
  console.log("a =", a, "| b =", b);
  console.log("Changing b did NOT affect a because primitives are copied by value.\n");

  let obj1 = { value: 10 };
  let obj2 = obj1;
  obj2.value = 20;

  console.log("Object values:");
  console.log("obj1 =", obj1, "| obj2 =", obj2);
  console.log("Changing obj2 DID affect obj1 because objects are shared by reference.");
}
demonstrateReferences();

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

const leakyCache = {};

function simulateLeak() {
  const key = "item_" + Object.keys(leakyCache).length;
  leakyCache[key] = { data: Math.random() };
}

function simulateClean() {
  const temp = { data: Math.random() };
  
}

console.log("\n--- Part 3: Reachability Simulation ---");

for (let i = 0; i < 5; i++) {
  simulateLeak();
  simulateClean();
}

console.log("leakyCache size:", Object.keys(leakyCache).length);
console.log("Objects created in simulateClean are not accessible and are eligible for garbage collection.");

function monomorphicAdd(a, b) {
  return a + b;
}

function polymorphicAdd(a, b) {
  return a + b;
}

console.log("\n--- Part 4: V8 Optimization ---");


console.time("monomorphicAdd");
for (let i = 0; i < 1_000_000; i++) {
  monomorphicAdd(1, 2);
}
console.timeEnd("monomorphicAdd");

console.time("polymorphicAdd");
for (let i = 0; i < 1_000_000; i++) {
  polymorphicAdd(1, 2);
  polymorphicAdd("1", 2);
  polymorphicAdd(true, 2);
}
console.timeEnd("polymorphicAdd");

console.log(`
Explanation:
monomorphicAdd is faster because it consistently receives numbers, allowing V8 to optimize it using inline caches and TurboFan.
polymorphicAdd receives mixed types, which breaks optimization and prevents efficient inline caching.
`);
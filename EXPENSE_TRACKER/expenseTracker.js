const categories=['Food','Travel','Study']
let expenses=0;


function addExpense(amount,category){
console.log(`✅ Added: ₹${amount}-${category}`);

}

function getAllExpenses(){
    console.log(expenses);
}


addExpense(500,'Food');
addExpense(600,'Travel');
getAllExpenses();

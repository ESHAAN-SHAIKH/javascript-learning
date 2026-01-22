const categories=['Food','Travel','Study']
let expenses=[];
let totalExpense=0;
const currency='₹'
function addExpense(amount,category){
    if(typeof amount!=='number'||amount<=0){
        console.log(`Invalid amount it must be a positive number`);
        return false;

    }
    if(!categories.includes(category)){
        console.log(`Enter valid category`);
        return false;
    }
    const expense={
        amount: amount,
        category: category,
        date: new Date().toLocaleDateString()
    };
    expenses.push(expense);
    calculateTotal();
console.log(`✅ Added: ₹${amount}-${category}`);
return true;

}
function calculateTotal(){
    let sum=0;
    for(let i=0;i<expenses.length;i++){
       sum+=expenses[i].amount;
    }
    totalExpense=sum;
    return totalExpense;
}
function categoryTotal(category){
    let total=0;
    for(let expense of expenses){
        if(expense.category==category){
            total+=expense.amount;
        }
    }
    return total;
}



function getAllExpenses(){
    if(expenses.length==0){
        console.log(`no expenses added yet`);
    }
    for(i=0;i<expenses.length;i++){
        console.log(`${i+1}. ₹${expenses[i].amount} - ${expenses[i].category} (${expenses[i].date})`);
    }
    console.log(`Total: ${totalExpense}`);
}
function showCategoryBreakdown(){
    for(let category of categories){
        const total = categoryTotal(category);
        if (total > 0) {
            const percentage = ((total / totalExpense) * 100).toFixed(1);
            console.log(`${category}: ₹${total.toFixed(2)} (${percentage}%)`);
        }
    }
}
function resetExpenses() {
    const count = expenses.length;
    expenses.length = 0;
    totalExpense = 0;
    console.log(`🗑️ Cleared ${count} expense(s)`);
}
function getStats() {
    if (expenses.length === 0) {
        console.log("No expenses to analyze");
        return;
    }
    
    const amounts = expenses.map(e => e.amount);
    const max = Math.max(...amounts);
    const min = Math.min(...amounts);
    const avg = totalExpense / expenses.length;
    
    console.log("\n=== STATISTICS ===");
    console.log(`Total Expenses: ${expenses.length}`);
    console.log(`Total Amount: ${currency}${totalExpense.toFixed(2)}`);
    console.log(`Average: ${currency}${avg.toFixed(2)}`);
    console.log(`Highest: ${currency}${max.toFixed(2)}`);
    console.log(`Lowest: ${currency}${min.toFixed(2)}\n`);}

console.log("🚀 Expense Tracker Loaded!\n");
console.log("Available functions:");
console.log("- addExpense(amount, category)");
console.log("- getAllExpenses()");
console.log("- showCategoryBreakdown()");
console.log("- getStats()");
console.log("- resetExpenses()");
console.log(`\nCategories: ${categories.join(", ")}\n`);

// Add some sample expenses
console.log("Adding sample expenses...\n");
addExpense(500, "Food");
addExpense(200, "Travel");
addExpense(300, "Study");
addExpense(150, "Food");
addExpense(400, "Travel");

// Display results
getAllExpenses();
showCategoryBreakdown();
getStats();

console.log("\n💡 Try adding your own expenses!");
console.log('Example: addExpense(250, "Food")');
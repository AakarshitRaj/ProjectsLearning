const notes = JSON.parse(localStorage.getItem("notes")) || [];
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

console.log("Total Notes:", notes.length);

const totalExpense = expenses.reduce(
  (sum, exp) => sum + exp.amount,
  0
);

console.log("Total Expense:", totalExpense);

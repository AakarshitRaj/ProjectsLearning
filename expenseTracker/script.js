let inputText = document.getElementById("text");
let amountInput = document.getElementById("amount");
let addButton = document.getElementById("addBtn");
let totalDisplay = document.getElementById("total");
let showlist = document.getElementById("list");

let expenseList = [];

addButton.addEventListener("click", addExpense);

function addExpense() {
  let text = inputText.value;
  let amount = parseFloat(amountInput.value);

  if (text === "" || isNaN(amount)) {
    alert("Please enter valid text and amount");
    return;
  }
  expenseList.push({ text, amount });
  showlist.innerHTML += `<li>${text}: ₹${amount}</li>`;
  updateTotal(expenseList);
  inputText.value = "";
  amountInput.value = "";
  return;
}
function updateTotal(expenseList) {
  let total = 0;
  for (let i = 0; i < expenseList.length; i++) {
    total += expenseList[i].amount;
    totalDisplay.innerText = `${total}`;
  }
}

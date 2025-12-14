let inputText = document.getElementById("text");
let amountInput = document.getElementById("amount");
let addButton = document.getElementById("addBtn");
let totalDisplay = document.getElementById("total");
let showlist = document.getElementById("list");

let expenseList = [];

addButton.addEventListener("click", addExpense);
// Allow adding expense on pressing Enter key when focused on add button and use tab to focus on it
addButton.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // optional
    addExpense();
  }
});

// Allow adding expense on pressing Enter key anywhere on the page
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addExpense();
  }
});





function renderExpenses() {
  showlist.innerHTML = "";

  for (let i = 0; i < expenseList.length; i++) {
    showlist.innerHTML += `
      <div>
        <li>${expenseList[i].text}: ₹${expenseList[i].amount}</li>
        <span>
          <button onclick="deleteExpense(${i})">Delete</button>
        </span>
      </div>
    `;
  }
  updateTotal(expenseList);
}

function addExpense() {
  let text = inputText.value;
  let amount = parseFloat(amountInput.value);

  if (text === "" || isNaN(amount)) {
    alert("Please enter valid text and amount");
    return;
  }
  expenseList.push({ text, amount });
  renderExpenses();
  saveExpenses(); 

  inputText.value = "";
  amountInput.value = "";
  return;
}
function updateTotal(expenseList) {
  let total = 0;
  for (let i = 0; i < expenseList.length; i++) {
    total += expenseList[i].amount;
  }
  totalDisplay.innerText = total;
}
function deleteExpense(index) {
  expenseList.splice(index, 1);
  renderExpenses();
  saveExpenses(); 
}

function saveExpenses() {
  localStorage.setItem("mydata", JSON.stringify(expenseList));
}

function loadExpenses() {
  const savedExpenses = localStorage.getItem("mydata");
  if (savedExpenses) {
    expenseList = JSON.parse(savedExpenses);
    renderExpenses();
  }
}

// Call this once when page loads
loadExpenses();

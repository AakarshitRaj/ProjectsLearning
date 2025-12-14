let input = document.getElementById("taskInput");

let tasks = [];

function addTask() {
  let task = input.value.trim(); // jo value user ne input me diya hai uske aage peeche ke extra spaces hata dega  aur store kar dega
  if (task) {
    tasks.push(task);
    input.value = "";
    renderTasks();

    // ye console me bhi dikhayega ki konsa task add hua hai (optional hai )
    console.log("Task added:", task);
  }
}

function renderTasks() {
  // ye function humare tasks ko display karega
  let taskList = document.getElementById("taskList"); //ye dom se taskList ko get karega
  taskList.innerHTML = ""; //pehle taskList ko empty kar dega taki purane tasks na dikhaye

  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");

    li.innerHTML =
      tasks[i] +
      ` <button onclick="deleteTask(${i})">Delete</button>
        <button onclick="editTask(${i})">Edit</button>`;

    taskList.appendChild(li); //ye li ko taskList me add kar dega aur humare tasks display hone lagenge
  }
}

function deleteTask(index) {
  tasks.splice(index, 1); //ye function tasks array me se ek task ko delete karega jo index pe hai
  // splice(2, 1)
  // ↓
  // from index 2
  // remove 1 item

  renderTasks(); //aur firse tasks ko render karega taki updated list dikhaye
}

function editTask(index) {
  let newTask = prompt("Edit your task:", tasks[index]);
  if (newTask) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

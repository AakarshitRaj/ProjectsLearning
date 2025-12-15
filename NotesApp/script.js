let input = document.getElementById("inputnote");
let searchInput = document.getElementById("search");
let addBtn = document.getElementById("addnote");
let searchBtn = document.getElementById("searchbtn");
let filter = document.getElementById("filter");
let notes = document.getElementById("noteslist");

let notelists = [];

addBtn.addEventListener("click", addNote);

searchBtn.addEventListener("click", searchNote);
filter.addEventListener("change", filterNotes);

// 🔹 Render Notes
function renderNotes(list) {
  notes.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let originalIndex = notelists.indexOf(list[i]);

    notes.innerHTML += `
      <li>
        ${list[i]}
        <button onclick="deleteNote(${originalIndex})">Delete</button>
        <button onclick="editNote(${originalIndex})">Edit</button>
      </li>
    `;
  }
}


// 🔹 Add Note
function addNote() {
  let noteText = input.value.trim();

  if (noteText) {
    notelists.push(noteText);
    input.value = "";
    savenotes();
    renderNotes(notelists);
  }
}

// 🔹 Search Note
function searchNote() {
  let searchText = searchInput.value.trim().toLowerCase();

  let filtered = notelists.filter(note =>
    note.toLowerCase().includes(searchText)
  );

  renderNotes(filtered);
}

// 🔹 Filter Notes
function filterNotes() {
  let filterValue = filter.value;
  let filteredNotes = [];

  if (filterValue === "all") {
    filteredNotes = notelists;
  } else if (filterValue === "short") {
    filteredNotes = notelists.filter(note => note.length < 20);
  } else if (filterValue === "long") {
    filteredNotes = notelists.filter(note => note.length >= 20);
  }

  renderNotes(filteredNotes);
}

// 🔹 Delete Note
function deleteNote(index) {
  notelists.splice(index, 1);
  savenotes();
  renderNotes(notelists);
}

// 🔹 Edit Note
function editNote(index) {
  let newNote = prompt("Edit your note:", notelists[index]);

  if (newNote && newNote.trim()) {
    notelists[index] = newNote.trim();
    savenotes();
    renderNotes(notelists);
  }
}

// 🔹 Save to LocalStorage
function savenotes() {
  localStorage.setItem("notelists", JSON.stringify(notelists));
}

// 🔹 Load from LocalStorage
function loadnotes() {
  let storedNotes = localStorage.getItem("notelists");

  if (storedNotes) {
    notelists = JSON.parse(storedNotes);
  }

  renderNotes(notelists);
}

// ✅ Load notes on page refresh
loadnotes();

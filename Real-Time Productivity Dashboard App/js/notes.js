import { debounce } from "./utils.js";
//this line retrieves notes from localStorage or initializes an empty array if none exist
let notes = JSON.parse(localStorage.getItem("notes")) || [];

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

addNoteBtn.addEventListener("click", addNote);

const searchInput = document.getElementById("searchInput");

const debouncedSearch = debounce(searchNotes, 300);

searchInput.addEventListener("input", debouncedSearch);

function searchNotes() {
  const keyword = searchInput.value.toLowerCase();

  const filtered = notes.filter(note =>
    note.text.toLowerCase().includes(keyword)
  );

  renderNotes(filtered);
}

function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  notes.push({
    id: Date.now(),
    text
  });

  saveNotes();
  renderNotes(notes);
  noteInput.value = "";
}

function renderNotes(notes) {
  notesList.innerHTML = "";

 for(let i=0; i<notes.length; i++) {
    const note = notes[i];
    const li = document.createElement("li");
    li.innerHTML = `
      ${note.text}
      <button onclick="deleteNote(${note.id})">❌</button>
    `;
    notesList.appendChild(li);
  };
}

window.deleteNote = function (id) {
  notes = notes.filter(note => note.id !== id);
  saveNotes();
  renderNotes(notes);
};

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

renderNotes(notes);

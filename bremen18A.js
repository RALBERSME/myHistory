const btnEl = document.getElementById("addNote");
const appEl = document.getElementById("sticker");

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.appendChild(noteEl);
});

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.style.borderRadius = "10%";
  element.style.backgroundColor = "rgb(227, 241, 246)";
  element.style.padding = "2%";
  element.style.fontFamily = "'Merriweather Sans', sans-serif";
  element.classList.add("note");
  element.placeholder = "Enter your idea";
  element.value = content;

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
  }
  return element;
}

function addNote() {
  const notes = getNotes();

  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: "",
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.appendChild(noteEl);

  notes.push(noteObj);

  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("idea", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("idea") || "[]");
}
btnEl.addEventListener("click", addNote);

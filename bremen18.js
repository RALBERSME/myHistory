const btnEl = document.getElementById("addNote");
const appEl = document.getElementById("sticker");

let notes = [];

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.style.borderRadius = "10%";
  element.style.backgroundColor = "rgb(227, 241, 246)";
  element.style.padding = "2%";
  element.style.fontFamily = "'Merriweather Sans', sans-serif";
  element.classList.add("note");
  element.placeholder = "Enter your idea";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you really want do delete your note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  function deleteNote(id, element) {
    notes = notes.filter((note) => note.id != id);
    appEl.removeChild(element);
  }

  function updateNote(id, content) {
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
  }
  return element;
}

function addNote() {
  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: "",
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.appendChild(noteEl);

  notes.push(noteObj);
}

btnEl.addEventListener("click", addNote);

let notes = [];
let trash = [];

function addNote(){

    const input = document.getElementById("noteInput");
    const text = input.value.trim();

    if(text === ""){
        alert("Please enter a note");
        return;
    }

    notes.push(text);
    input.value = "";

    displayNotes();
}

function displayNotes(){

    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    notes.forEach((note,index)=>{

        notesList.innerHTML += `
            <div class="note">
                <p>${note}</p>

                <div class="note-buttons">
                    <button class="delete-btn"
                    onclick="deleteNote(${index})">
                    Delete
                    </button>
                </div>
            </div>
        `;
    });
}

function deleteNote(index){

    trash.push(notes[index]);

    notes.splice(index,1);

    displayNotes();
    displayTrash();
}

function displayTrash(){

    const trashList = document.getElementById("trashList");

    trashList.innerHTML = "";

    trash.forEach((note,index)=>{

        trashList.innerHTML += `
            <div class="note">
                <p>${note}</p>

                <div class="note-buttons">

                    <button class="restore-btn"
                    onclick="restoreNote(${index})">
                    Restore
                    </button>

                    <button class="permanent-btn"
                    onclick="permanentDelete(${index})">
                    Delete Forever
                    </button>

                </div>
            </div>
        `;
    });
}

function restoreNote(index){

    notes.push(trash[index]);

    trash.splice(index,1);

    displayNotes();
    displayTrash();
}

function permanentDelete(index){

    trash.splice(index,1);

    displayTrash();
}
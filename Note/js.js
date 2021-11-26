const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
    addNewNote();
});

addNewNote = function() {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class="notes">
        <div class="setting-head">
            <div id="setting-left">
                <button><i class="fas fa-ellipsis-h"></i></button>
                <button id="add-btn"><i class="fas fa-plus"></i></button>
                <button class="edit"><i class="fas fa-cog"></i></button>
            </div>
            <div id="setting-right">
                <button id="delete-btn"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
        <div class="setting-foot">
            <button id="save">Save</button>
        </div>
    </div>
    `;

    const deleteBtn = note.querySelector('#delete-btn')
    const saveBtn = note.querySelector('#save')
    const editBtn = note.querySelector('.edit');
    const addBtn2 = note.querySelector('#add-btn')
    const textArea = note.querySelector('textarea')
    const main = note.querySelector('.main')
    
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        saveBtn.classList.toggle('hidden')
    });

    deleteBtn.addEventListener('click', () => {
        note.remove();
    });


    textArea.addEventListener('input', (e) => {
        const {value}= e.target;
        main.innerHTML = marked(value);
    });

    document.body.appendChild(note);

    addBtn2.addEventListener('click', () => {
        addNewNote();
    });

    saveBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        saveBtn.classList.toggle('hidden')
    });
}






const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <div>
            <button ><i class="fas fa-ellipsis-h"></i></button>
            <button><i class="fas fa-plus"></i></button>
            <button class="edit"><i class="fas fa-cog"></i></button>
            </div>
        <div>
            <button class="delete"><i class="fas fa-times"></i></button>
        </div>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
    </div>
    `;

    const deleteBtn = note.querySelector('.delete');
    const editBtn = note.querySelector('.edit');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    
    })

    deleteBtn.addEventListener('click', () => {
        note.remove();
    })
    
    textArea.addEventListener('input', (e) => {
        const {value} = e.target;
        main.innerHTML = marked(value);
    })

    document.body.appendChild(note);
    
    
}
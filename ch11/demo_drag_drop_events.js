/* from https://www.javascripttutorial.net/sample/webapis/drag-n-drop-basics/ */
/* draggable element */
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragend', dragEnd);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(`${e.target.id} drag starts`);}

function dragEnd(e) {
    console.log(`${e.target.id} drag ends`);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    console.log(`${e.target.id} drag enters`);
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    console.log(`${e.target.id} drag over`);
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
    console.log(`${e.target.id} drag leaves`);
}

function drop(e) {
    console.log(`${e.target.id} drop`);
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}
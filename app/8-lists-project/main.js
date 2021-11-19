var formElement = document.getElementById('todo-form'),
    taskContainer = document.getElementById('task-container');

function handleDone(e){
    e.preventDefault();

    let currentElement = this,
        liEle = currentElement.parentNode,
        spanEle = liEle.querySelector('span');
    spanEle.classList.add('done');  
} 

function handleDelete(e){
    console.log('handleDelete');
    e.preventDefault();

    let currentElement = this,
        liEle = currentElement.parentNode;
    liEle.remove();
} 

function handleEdit(e){
    e.preventDefault();
}


function addTask(e){
    e.preventDefault();
    var todoTaskEle = document.getElementById('todo-task'),
        todoTaskValue = todoTaskEle.value,
        

        liEle = document.createElement('li'),
        spanEle = document.createElement('span'),
        doneEle = document.createElement('a'),
        editEle = document.createElement('a'),
        deleteEle = document.createElement('a');
        spanEle.innerHTML = todoTaskValue;

        doneEle.classList.add('done-btn');
        editEle.classList.add('edit-btn');
        deleteEle.classList.add('delete-btn');

        doneEle.innerHTML = 'Done';
        editEle.innerHTML = 'Edit';
        deleteEle.innerHTML = 'Delete';

        doneEle.setAttribute('href','#');
        editEle.setAttribute('href','#');
        deleteEle.setAttribute('href','#');

        doneEle.addEventListener('click', handleDone);
        // editEle.addEventListener('click', handleEdit);
        deleteEle.addEventListener('click', handleDelete);

        liEle.appendChild(spanEle);
        liEle.appendChild(doneEle);
        liEle.appendChild(editEle);
        liEle.appendChild(deleteEle);

        taskContainer.append(liEle);

        todoTaskEle.value = '';

}

formElement.addEventListener('submit',addTask);
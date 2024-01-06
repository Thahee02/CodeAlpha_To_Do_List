const inputEl = document.querySelector('input');
const addBtnEl = document.querySelector('#addBtn');
const taskListEl = document.querySelector('#taskList');
const taskEls = document.querySelectorAll('#taskList > ul > li');

console.log(taskEls);

function addTask(){

    if(inputEl.value != ""){
        const taskEl = document.createElement('li');
        taskEl.classList.add('text-sm', 'bg-blue-200', 'px-1', 'py-2', 'text-gray-900', 'flex', 'items-center', 'justify-between', 'mb-2');

        const pEl = document.createElement('span');
        pEl.classList.add('truncate');
        pEl.textContent = inputEl.value.trim();

        const delBtnEl = document.createElement('button');
        delBtnEl.classList.add('text-red-600');
        delBtnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"/></svg>`

        delBtnEl.addEventListener('click',()=>{
            taskEl.remove();
        })

        taskEl.append(pEl, delBtnEl);
        taskListEl.append(taskEl);
    }
    else{
        alert('Please enter your task');
    }
}

addBtnEl.addEventListener('click',()=>{
    addTask();
    inputEl.value = "";
})

inputEl.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        addTask();
        inputEl.value = "";
    }
})
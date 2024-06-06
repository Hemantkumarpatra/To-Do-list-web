let ListContainer = document.getElementById('List-container')
let inputBox = document.getElementById('input-box')

function addTask(){
    if(inputBox.value === ''){
        alert('Add your task')
    }
    else{
        let task = document.createElement('Li')
        task.textContent = inputBox.value
        ListContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }
    inputBox
    saveData()
}
ListContainer.addEventListener('click', (el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})
function saveData(){
    localStorage.setItem("tasks", ListContainer.innerHTML)
}
function showData(){
    ListContainer.innerHTML = localStorage.getItem('tasks')
}
showData()
const inputText = document.getElementById('item-input')
const addButton = document.querySelector('#add-btn')
const list = document.querySelector('#todo-items')
const saveBtn = document.querySelector('#save-btn')
const readBtn = document.querySelector('#read-btn')

addButton.addEventListener('click', addButtonClick)

document.body.onload = function() {
    if (localStorage.getItem('items') === null) {
        localStorage.setItem('items', '[]')
    }
    items = JSON.parse(localStorage.getItem('items'))
    readItems()
}

saveBtn.onclick = function() {
    localStorage.setItem('items', JSON.stringify(items))
}


let items = []

function readItems() {
    list.innerHTML = ''
    for (let index = 0; index < items.length; index++) {
        const content = items[index];
        let li = document.createElement('li')
        li.innerText = content
        li.id = index
        list.appendChild(li)
        li.onclick = function() {
            deleteItem(li)
        }
        inputText.value = ''
    }
}

function deleteItem(li) {
    let index = parseInt(li.id);
    items.splice(index, 1)
    readItems()
}

function handleKey(e) {
    if (e.code === 'Enter') {
        items.push(inputText.value)
        readItems()
    }
}

function addButtonClick() {
    items.push(inputText.value)
    readItems()
}
let textInput = document.querySelector('input')

let toDoList = document.querySelector('#todos')

let button = document.querySelector('button')

button.addEventListener('click', () => {
    let item = document.createElement('li')

    item.textContent = textInput.value

    toDoList.append(item)

    textInput.value = ''

    item.addEventListener('click', () => {
        item.classList.toggle('checked')
    })
})
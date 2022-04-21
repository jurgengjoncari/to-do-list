let textInput = document.querySelector('#text')

let toDoList = document.querySelector('#todos')

let addButton = document.querySelector('button.btn-primary')

function createToDoItem() {
    let item = document.createElement('li')

    item.addEventListener('click', () => {
        item.classList.toggle('checked')
    })

    let deleteButton = document.createElement('button')

    deleteButton.textContent = '-'

    item.appendChild(deleteButton)

    item = `
    <label>
        <input type="checkbox">
        
    `

    return item
}

class ToDoItem extends HTMLElement {
    constructor() {
        super()

        // let checkbox = document.createElement('input')
        // checkbox.setAttribute('type', 'checkbox')
        // checkbox.classList.add('form-check-input')
        // this.appendChild(checkbox)

        // let deleteButton = document.createElement('button')
        // deleteButton.textContent = '-'
        // deleteButton.classList.add('btn', 'btn-danger')
        // this.appendChild(deleteButton)

        this.innerHTML = `
            <li class='list-group-item form-check d-flex justify-content-between'>
                <label class="form-check-label" id="item-label">
                    <input type="checkbox" class="form-check-input">
                    ${textInput.value}
                </label>
            </li>
        `
        this.addEventListener('click', this.check)

        this.deleteButton.innerHTML = `
            <button class="btn btn-danger" id="delete">
                -
            </button>
        `
        this.deleteButton.addEventListener('click', this.delete)

        this.appendChild(this.deleteButton)

        // this.classList.add('d-flex', 'justify-content-between')
    }

    check() {
        this.classList.toggle('checked')
    }

    delete() {
        this.remove()
    }
}

customElements.define('to-do-item', ToDoItem)

addButton.addEventListener('click', () => {
    // let toDoItem = document.createElement("to-do-item")

    // toDoItem.textContent = textInput.value
    let toDoItem = document.createElement('li')

    toDoItem.classList.add('list-group-item', 'form-check', 'd-flex', 'justify-content-between')

    toDoItem.innerHTML = `
        <label class="form-check-label" id="item-label">
            <input type="checkbox" class="form-check-input">
            ${textInput.value}
        </label>
        <button class="btn btn-danger">
            -
        </button>
    `

    toDoItem.addEventListener('click', () => {

    })

    toDoList.append(toDoItem)

    textInput.value = ''
})

let toDoInput = document.querySelector('#to-do-input')

let toDoList = document.querySelector('#todos')

let submitToDo = document.querySelector('#submit-to-do')

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

        // this.classList.add('d-flex', 'justify-content-between')
    }

    connectedCallback() {
        this.innerHTML = `
            <a class='list-group-item form-check d-flex justify-content-between'>
                <label class="form-check-label" id="item-label">
                    <input type="checkbox" class="form-check-input">
                    ${toDoInput.value}
                </label>
            </a>
        `
        this.addEventListener('click', this.check)

        // let deleteButton = document.createElement('button')
    }

    check() {
        this.classList.toggle('checked')
    }

    delete() {
        this.remove()
    }
}

customElements.define('to-do-item', ToDoItem)

class DeleteButton extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <button class="btn btn-danger" id="delete">
                -
            </button>
        `
    }
}

customElements.define('delete-button', DeleteButton)

submitToDo.addEventListener('click', () => {
    let toDoItem = document.createElement("to-do-item")

    // toDoItem.textContent = toDoInput.value

    // let toDoItem = document.createElement('li')

    // toDoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between')

    // toDoItem.innerHTML = `
    //     <div class="form-check">
    //         <label class="form-check-label" id="item-label">
    //             <input type="checkbox" class="form-check-input">
    //             ${toDoInput.value}
    //         </label>
    //     </div>
    //     <button class="btn btn-danger">
    //         -
    //     </button>
    // `

    // toDoItem.addEventListener('click', () => {

    // })

    let deleteButton = document.createElement('delete-element')

    toDoItem.appendChild(deleteButton)

    toDoList.append(toDoItem)

    deleteButton.addEventListener('click', () => {toDoList.remove()})

    toDoInput.value = ''
})

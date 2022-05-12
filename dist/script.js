let input = document.querySelector('#input')
input.focus()

let checklist = document.querySelector('#checklist')

let submitButton = document.querySelector('#submit')

function createItem(todo) {
    const listItem = document.createElement('li')

    listItem.innerHTML = `
        <label>
            <input type="checkbox" class="form-check-input me-1">
        </label>
        <button class="delete btn btn-outline-danger"></button>
    `;

    listItem.querySelector("label").insertAdjacentText('beforeend', todo)
    listItem.querySelector(".delete").onclick = () => listItem.remove()

    return listItem
}

submitButton.addEventListener('click', () => {

    checklist.append(createItem(input.value))
    console.log(input.value);

    input.value = ''
    input.focus()
})

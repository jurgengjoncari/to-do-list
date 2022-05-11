let input = document.querySelector('#input')

let checklist = document.querySelector('ul')

let submitButton = document.querySelector('#submit')

function createItem(todo) {
    const listItem = document.createElement('li')
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between')

    listItem.innerHTML = `
        <label>
            <input type="checkbox">
        </label>
        <button class="delete"></button>
    `;

    listItem.querySelector("label").insertAdjacentText('beforeend', todo)
    listItem.querySelector(".delete").onclick = () => listItem.remove()

    return listItem
}

submitButton.addEventListener('click', () => {

    checklist.append(createItem(input.value))
    console.log(input.value);

    input.value = ''
})

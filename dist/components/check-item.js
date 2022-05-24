export default function createItem(todo) {
    const checkItem = document.createElement('li')

    const id = `id_${Date.now()}`
    
    checkItem.innerHTML = `
        <input type="checkbox" class="form-check-input me-1" id="${id}">
        <label for="${id}"></label>
        <button class="delete btn btn-outline-danger"></button>
    `;

    const checkbox = checkItem.querySelector("input")
    const label = checkItem.querySelector("label")
    const deleteButton = checkItem.querySelector(".delete")

    checkbox.addEventListener("click", () => {
        label.classList.toggle("checked")
    })
    label.insertAdjacentText('beforeend', todo)
    deleteButton.addEventListener('click', () => checkItem.remove())

    return checkItem
}

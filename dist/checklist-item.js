export default function createItem(todo) {
    const listItem = document.createElement('li')

    const id = `id_${Date.now()}`
    listItem.innerHTML = `
        <input type="checkbox" class="form-check-input me-1" id="${id}">
        <label for="${id}"></label>
        <button class="delete btn btn-outline-danger"></button>
    `;

    const input = listItem.querySelector("input")
    const label = listItem.querySelector("label")
    const deleteButton = listItem.querySelector(".delete")

    input.addEventListener("click", () => {
        label.classList.toggle("checked")
    })
    label.insertAdjacentText('beforeend', todo)
    deleteButton.onclick = () => listItem.remove()

    // if (input.classList.contains("checked")) {
    //     label.style.textDecoration = "line-through"
    // }

    return listItem
}

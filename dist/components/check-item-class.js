export default class CheckItem extends HTMLElement {
    constructor(description) {
        super()

        // Create shadow tree
        const shadow = this.attachShadow({mode: 'open'})
        const itemTemplate = document.querySelector('#check-item')
        shadow.append(itemTemplate.content.cloneNode(true));

        // Update the HTML template
        const checkBox = shadow.querySelector(`[type=checkbox]`)
        const label = shadow.querySelector("label")
        const deleteButton = shadow.querySelector("[data-delete]")

        checkBox.addEventListener("click", () => label.classList.toggle("checked"))
        label.insertAdjacentText('beforeend', description)
        deleteButton.addEventListener("click", () => this.remove())

        // Insert Ids to checkbox and label
        const id = `id_${Date.now()}`

        checkBox.id = id
        label.setAttribute('for', id)

        // Style container
    }
}

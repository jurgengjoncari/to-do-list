export default class CheckItem extends HTMLElement {
    constructor(description) {
        super().attachShadow({mode: 'open'})
        const itemTemplate = document.querySelector('#check-item')
        this.shadowRoot.append(itemTemplate.content.cloneNode(true));

        // Update the HTML template and add events
        const checkBox = this.shadowRoot.querySelector(`[type=checkbox]`)
        const label = this.shadowRoot.querySelector("label")
        const deleteButton = this.shadowRoot.querySelector("[data-delete]")

        checkBox.addEventListener("click", () => label.classList.toggle("checked"))
        deleteButton.addEventListener("click", () => this.remove())

        // Insert Ids to checkbox and label
        const id = `id_${Date.now()}`

        checkBox.id = id
        label.setAttribute('for', id)

        // Store description in a span with slot
        this.span = `<span slot='description'>${description}<span>`
    }

    addDescription() {
        this.insertAdjacentHTML('beforeend', this.span)
    }
}

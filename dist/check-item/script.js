export default class CheckItem extends HTMLElement {
    constructor() {
        // @ts-ignore
        super().attachShadow({mode: 'open'})
        const itemTemplate = document.querySelector('template[data-check-item]')
        // @ts-ignore
        this.shadowRoot.append(itemTemplate.content.cloneNode(true));

        // Register properties
        this.checkBox = this.shadowRoot.querySelector(`[type=checkbox]`)
        this.label = this.shadowRoot.querySelector("label")
        this.deleteButton = this.shadowRoot.querySelector("[data-delete]")

        this.setID()

        // Make it interactive
        this.checkBox.addEventListener("click", () => this.handleClick())
        this.deleteButton.addEventListener("click", () => this.handleDelete())
    }

    setID() {
        const id = `id_${Date.now()}`

        this.checkBox.id = id
        this.label.setAttribute('for', id)
    }

    handleClick() {
        this.label.classList.toggle("checked")
    }

    handleDelete() {
        this.remove()
    }

    setDescription(description) {
        const span = `<span slot='description'>${description}<span>`
        this.insertAdjacentHTML('beforeend', span)
    }
}

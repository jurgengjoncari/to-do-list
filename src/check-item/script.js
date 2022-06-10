const response = await fetch('../src/check-item/template.html')
const text = await response.text()

const parsed = new DOMParser().parseFromString(text, 'text/html')
const itemTemplate = parsed.querySelector('[data-check-item]')

export default class CheckItem extends HTMLElement {
    constructor() {
        // @ts-ignore
        super().attachShadow({ mode: 'open' })
        // @ts-ignore
        this.shadowRoot.append(itemTemplate.content.cloneNode(true));

        // Register properties
        this.checkBox = this.shadowRoot.querySelector(`[type=checkbox]`)
        this.label = this.shadowRoot.querySelector("label")
        this.deleteButton = this.shadowRoot.querySelector("[data-delete]")

        this.setId()

        // Make it interactive
        this.checkBox.addEventListener("click", () => this.handleCheck())
        this.deleteButton.addEventListener("click", () => this.handleDelete())
    }

    setId() {
        const ID = `id_${Date.now()}`

        this.checkBox.id = ID
        this.label.setAttribute('for', ID)
    }

    handleCheck() {
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

const response = await fetch('../src/li-action/template.html')
const text = await response.text()

const parsed = new DOMParser().parseFromString(text, 'text/html')
const itemTemplate = parsed.querySelector('[data-item-action]')

export default class listItemAction extends HTMLElement {
    constructor() {
        // @ts-ignore
        super().attachShadow({ mode: 'open' })
        // @ts-ignore
        this.shadowRoot.append(itemTemplate.content.cloneNode(true));

        // Register properties
        this.label = this.shadowRoot.querySelector("label")
        this.buttonEdit = this.shadowRoot.querySelector("[data-edit]")
        this.buttonDelete = this.shadowRoot.querySelector("[data-delete]")
    }

    connectedCallback() {
        // this.buttonEdit.addEventListener("click", () => this.handleInfo())
        this.buttonDelete.addEventListener("click", () => this.handleDelete())
    }

    handleEdit() {}

    handleDelete() {
        this.remove()
    }

    setDescription(description) {
        const span = `<span slot='description'>${description}<span>`
        this.insertAdjacentHTML('beforeend', span)
    }
}

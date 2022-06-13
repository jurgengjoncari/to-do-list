import listItemAction from '../script'

export default class CheckItem extends listItemAction {
    constructor() {
        super()

        this.actionsStart = this.shadowRoot.querySelector('[data-actions-start]')

        const stringCheckbox = `
            <input type="checkbox" class="form-check-input me-1"></input>
            `
        const parsedCheckbox = new DOMParser()
            .parseFromString(stringCheckbox, 'text/html')
        this.checkbox = parsedCheckbox.querySelector('[type=checkbox]')
    }

    connectedCallback() {
        this.actionsStart.append(this.checkbox)
        this.setId()
        this.checkbox.addEventListener("click", () => this.handleCheck())
    }

    setId() {
        const ID = `id_${Date.now()}`

        this.checkbox.id = ID
        this.label.setAttribute('for', ID)
    }

    handleCheck() {
        this.label.classList.toggle("checked")
    }
}

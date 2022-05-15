export default class CheckItem extends HTMLElement {
    constructor(description) {
        const self = super()

        const listItem = document.createElement('li')

        const id = `id_${Date.now()}`
        
        listItem.innerHTML = `
            <span>
                <input type="checkbox" class="form-check-input me-1" id="${id}">
                <label for="${id}"></label>
            </span>
            <button class="delete btn btn-outline-danger"></button>
        `;

        const input = listItem.querySelector("input")
        this.label = listItem.querySelector("label")
        const deleteButton = listItem.querySelector(".delete")

        input.addEventListener("click", this.setChecked)
        this.label.insertAdjacentText('beforeend', description)
        deleteButton.addEventListener("click", this.deleteItem)

        console.log(self);
    }

    setChecked() {
        this.label.classList.toggle("checked")
    }

    deleteItem() {
        listItem.remove()
    }
}

// customElements.define('check-item', CheckItem)

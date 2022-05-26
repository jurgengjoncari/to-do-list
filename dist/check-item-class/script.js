import CheckItem from './check-item-class.js'

customElements.define('check-item', CheckItem)

const input = document.querySelector('[data-input]')
const checklist = document.querySelector('[data-checklist]')
const submitButton = document.querySelector('[data-submit]')

input.focus()

submitButton.addEventListener('click', () => {
    checklist.append(new CheckItem(input.value))

    input.value = ''
    input.focus()
})

// Add some data manually
const items = [
    "Buy veggies",
    "Go to gym",
    "Fix my bike",
    "Buy painting supplies"
]

for (let item of items) {
    let checkItem = new CheckItem(item)
    checkItem.addDescription()
    checklist.append(checkItem)
}


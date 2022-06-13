import listItemAction from './li-action/script.js'
import CheckItem from './li-action/check-item/script.js'

customElements.define('li-action', listItemAction)
customElements.define('check-item', CheckItem)

const input = document.querySelector('[data-input]')
const checklist = document.querySelector('[data-checklist]')
const submitButton = document.querySelector('[data-submit]')

input.focus()

// Add event to submit button
// @ts-ignore
submitButton.addEventListener('click', () => insertCheckItem(input.value))

// Add some data manually
const items = [
    "Buy veggies",
    "Go to gym",
    "Fix my bike",
    "Buy painting supplies"
]

items.forEach((item) => insertCheckItem(item))

function insertCheckItem(description) {
    // @ts-ignore
    let checkItem = new CheckItem
    checkItem.setDescription(description)

    checklist.append(checkItem)    

    // @ts-ignore
    input.value = ''
    input.focus()
}

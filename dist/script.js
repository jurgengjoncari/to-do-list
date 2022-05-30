import CheckItem from './check-item/script.js'

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

function insertCheckItem(item) {
    // @ts-ignore
    let checkItem = new CheckItem
    checkItem.description = item

    checklist.append(checkItem)    

    // @ts-ignore
    input.value = ''
    input.focus()
}

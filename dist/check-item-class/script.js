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

checklist.append(new CheckItem("Buy veggies"))
checklist.append(new CheckItem("Go to gym"))
checklist.append(new CheckItem("Fix my bike"))
checklist.append(new CheckItem("Buy paining supplies"))
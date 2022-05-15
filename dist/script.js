import createItem from './check-item.js'; 

let input = document.querySelector('[data-input]')
input.focus()

let checklist = document.querySelector('[data-checklist]')

let submitButton = document.querySelector('[data-submit]')

submitButton.addEventListener('click', () => {
    checklist.append(createItem(input.value))
    console.log(input.value);

    input.value = ''
    input.focus()
})

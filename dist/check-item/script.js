import createItem from './check-item.js'; 

const input = document.querySelector('[data-input]')
input.focus()

const checklist = document.querySelector('[data-checklist]')

const submitButton = document.querySelector('[data-submit]')

submitButton.addEventListener('click', () => {
    checklist.append(createItem(input.value))
    console.log(input.value);

    input.value = ''
    input.focus()
})

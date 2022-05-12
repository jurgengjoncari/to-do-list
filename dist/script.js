import createItem from './check-item.js'; 

let input = document.querySelector('#input')
input.focus()

let checklist = document.querySelector('#checklist')

let submitButton = document.querySelector('#submit')


submitButton.addEventListener('click', () => {

    checklist.append(createItem(input.value))
    console.log(input.value);

    input.value = ''
    input.focus()
})

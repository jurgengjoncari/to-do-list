import createItem from './components/check-item.js'; 
import CheckItem from './components/checklist-item-class.js'

customElements.define('check-item', CheckItem)

let input = document.querySelector('#input')
input.focus()

let checklist = document.querySelector('#checklist')

let submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', () => {
    const checkItem = new CheckItem(input.value)
    console.log(checkItem);
    
    checklist.append(checkItem)
    console.log(input.value);

    input.value = ''
    input.focus()
})

import createItem from './components/check-item.js'; 
// import CheckItem from './components/checklist-item-class.js'

// customElements.define('check-item', CheckItem)

const input = document.querySelector('[data-input]')
input.focus()

const checklist = document.querySelector('[data-checklist]')

const submitButton = document.querySelector('[data-submit]')

submitButton.addEventListener('click', () => {
    // const checkItem = new CheckItem(input.value)
    // console.log(checkItem);
    
    checklist.append(createItem(input.value))
    console.log(input.value);

    input.value = ''
    input.focus()
})

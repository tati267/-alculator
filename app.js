//define an output for the result and creat container for the keyboard
const output = document.querySelector('output')
const div = document.createElement('div')
div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)

//for each symbol in an array creat a button 
let signs = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '/',
    '0', '=', '.', 'c'
];
signs.map(symbol => {
    div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
})

//choose each button with addEventListener
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        calc(this.value)
    })
})

//added possibility to chose symbol with keyboard
document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})
// function get keybord symbol or click on button
function calc(value) {
    if (value.match(/=|Enter/)) {
        try {
            output.textContent = Math.trunc(math.evaluate(output.textContent))
        } catch {
            // save output
            let oldValue = output.textContent
            let newValue = 'wrong value'
            output.textContent = newValue
            setTimeout(() => {
                output.textContent = oldValue
            }, 1500)
        }

    } else if (value === 'C') {
        output.textContent = ''
    } else if (value.match(/CE|Backspace/)) {
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
    } else {
        output.textContent += value
    }
}
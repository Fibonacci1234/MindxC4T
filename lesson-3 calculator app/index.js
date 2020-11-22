const calculator = document.getElementById('calculator')

const inputTags = calculator.getElementsByTagName('input')

for (let i = 0; i < inputTags.length; i++) {
    const input = inputTags[i]
    if (input.type === 'button') {
        if (input.value === 'C') {
            input.onclick = function() {
                calculator.display.value = ''
            }
        } else if (input.value === '=') {
            input.onclick = function() {
                calculator.display.value = eval(calculator.display.value)
            }
        } else {
            input.onclick = function () {
                calculator.display.value += input.value
            }
        }
    }
}



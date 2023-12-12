let firstNumber
let secondNumber
let operator


let displayLargeEl = document.getElementById('display-low')
let displaySmallEl = document.getElementById('display-up')

let buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click',() => {
    let value = button.textContent
    displayLargeEl.textContent += value
    })
})

    

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function operate(operator,num1,num2){
    if(operator == '+'){
        add(num1,num2)
    } else if(operator == '-'){
        subtract(num1,num2)
    } else if(operator == '*'){
        multiply(num1,num2)
    } else if(operator == '/'){
       divide(num1,num2)
    }

}




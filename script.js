let firstNumber
let secondNumber
let operator


const displayLargeEl = document.getElementById('display-low')
const displaySmallEl = document.getElementById('display-up')
const deleteButton = document.getElementById('delete-btn')
const clearButton = document.getElementById('clear-btn')
const numberButtons = document.querySelectorAll('.num')
const operatorButtons = document.querySelectorAll('.operator')




numberButtons.forEach((button) => {
    button.addEventListener('click',() => {
    let inputValue = button.textContent
    displayLargeEl.value += inputValue
    displayLargeEl.scrollLeft = displayLargeEl.scrollWidth;
    })
})


operatorButtons.forEach((button) => {
    button.addEventListener('click',() => {
        operator = button.textContent
        displaySmallEl.value += operator
    })

})


deleteButton.addEventListener('click',()=>{
    
    
    if(displayLargeEl.value === ''){
        displaySmallEl.value = displaySmallEl.value.slice(0,displaySmallEl.value.length - 1)
    } else {
        displayLargeEl.value = displayLargeEl.value.slice(0,displayLargeEl.value.length - 1)
    }
})

clearButton.addEventListener('click',() => {
    displayLargeEl.value = ''
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




function add(a,b){
  return a+b
}
function subtract(a,b){
  return a-b
}
function multiply(a,b){
  return a*b
}
function divide(a,b){
  return a/b
}

function operate(a,b,operator){
  switch (operator) {
    case "+":
      return add(a,b)
    case "-":
      return subtract(a,b)
    case "*":
      return multiply(a,b)
    case "/":
      return divide(a,b)
    default:
      break;
  }
}

const display = document.querySelector('.display')

const buttons = document.querySelectorAll('button')
let firstNum = '';
let secondNum = '';

buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    display.textContent+=button.textContent;
    firstNum=display.textContent.split('+')[0];
    secondNum = display.textContent.split('+')[1];
    console.log(`fir ${firstNum}`);
    console.log(`sec ${secondNum}`);
  })
})
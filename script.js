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
      console.log(add(a,b))
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
let tempNum = '';

buttons.forEach(button => {
  button.addEventListener('click',()=>{
    // if(button.id>=1 && button.id<=9){display.textContent+=(button.id)}
    switch (button.textContent) {
      case '=':
        display.textContent='';
        console.log(firstNum);
        console.log(temp);
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        temp = display.textContent+=(button.id);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        display.textContent='';
        firstNum = temp
        console.log(temp)
      default:
        break;
    }
  })
});
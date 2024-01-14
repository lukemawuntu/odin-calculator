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
  let numA = +a;
  let numB = +b;
  let result;
  switch (operator) {
    case "+":
      result = add(numA,numB)
      return display.textContent=result;
    case "-":
      result = subtract(numA,numB)
      return display.textContent=result;
    case "*":
      result = multiply(numA,numB)
      return display.textContent=result;
    case "/":
      result = divide(numA,numB)
      return display.textContent=result;
    default:
      break;
  }
}

const display = document.querySelector('.display')

const buttons = document.querySelectorAll('button')
let firstNum = '';
let tempNum = '';
let operator = '';
buttons.forEach(button => {
  button.addEventListener('click',()=>{
    switch (button.textContent) {
      case '=':
        display.textContent='';
        operate(firstNum,temp,operator)
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
        if(button.textContent=='+'||button.textContent=='-'||button.textContent=='*'||button.textContent=='/'){
          operator=button.textContent;
        }
      default:
        break;
    }
  })
});
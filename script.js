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
let clickedEqual = false;
buttons.forEach(button => {
  button.addEventListener('click',()=>{
    switch (button.textContent) {
      case '=':
        display.textContent='';
        operate(firstNum,tempNum,operator)
        clickedEqual=true;
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
        tempNum = display.textContent+=(button.id); //12
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        display.textContent=''; // empty display
        if (clickedEqual) {
          firstNum=result;
        } else{
          firstNum=tempNum;
        }
        operator=button.textContent; 
      default:
        break;
    }
  })
});
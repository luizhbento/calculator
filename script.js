let firstNumber = "";
let secondNumber = "";
let operator = "";

const operatorList = ["x", "/", "-", "+"];

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, op) => {
  switch (op) {
    case "+":
      return sum(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      if (firstNumber === "") {
        firstNumber = 0;
      }
      if (secondNumber === "") {
        secondNumber = 0;
      }
      operate(firstNumber, secondNumber, operator);
    } else if (operatorList.includes(button.textContent)) {
      if (firstNumber === "") firstNumber = 0;
      if (secondNumber === "") {
        operator = button.textContent;
      }
    } else if (button.textContent === "clear") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
    } else {
      operator === ""
        ? (firstNumber += button.textContent)
        : (secondNumber += button.textContent);
    }
    // switch (button.textContent) {
    // case "1":
    //   break;
    // case "2":
    //   break;
    // case "1":
    //   break;
    // case "2":
    //   break;
    // case "3":
    //   break;
    // case "4":
    //   break;
    // case "5":
    //   break;
    // case "6":
    //   break;
    // case "7":
    //   break;
    // case "8":
    //   break;
    // case "9":
    //   break;
    // case "0":
    //   break;
    // case "+":
    //   break;
    // case "-":
    //   break;
    // case "x":
    //   break;
    // case "/":
    //   break;
    // case "=":
    //   break;
    // case "clear":
    //   break;
    // }
    display.textContent = firstNumber;
  });
});

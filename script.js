const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const clearButton = document.getElementById("clear");
const themeToggle = document.getElementById("themeToggle");

const buttons = [addButton, subtractButton, multiplyButton, divideButton];
let selectedOperator = "+";

function getNumbers(){
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);
    return [num1, num2];
}

function calculate(num1, num2, operator){
    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        if(num2 === 0){
            return "Cannot divide by zero";
        }else{
            return num1 / num2;
        }
    }else {
        return "invalid operator";
    }
}
function handleCalculation(operator){
    if (number1.value === "" || number2.value === "") {
        result.textContent = "Please enter both numbers!";
        return;
    }
    const [num1, num2] = getNumbers();
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        result.textContent = "Please enter valid numbers!";
        return;
    }
    const answer = calculate(num1, num2, operator);
    result.textContent = "Result: " + answer;
}
buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        selectedOperator = button.dataset.operator;
        handleCalculation(selectedOperator);
    });
});

number1.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        handleCalculation(selectedOperator);
    }
});
number2.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        handleCalculation(selectedOperator);
    }
});
clearButton.addEventListener("click", function(){
    number1.value = "";
    number2.value = "";
    result.textContent ="Result: "
});
themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
});


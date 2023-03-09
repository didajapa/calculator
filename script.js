const numberButton = document.querySelectorAll(".number");
const modifierButton = document.querySelectorAll(".modifier");
const specialModifierButton = document.querySelectorAll(".special-modifier");

numberButton.forEach((button) =>
    button.addEventListener("click", () => test(button.textContent))
    );

modifierButton.forEach((button) =>
button.addEventListener("click", () => test(button.textContent))
);


function test(number){
    console.log(number);
}


function add(a, b){
    return a += b;
};

function subtract(a, b){
    return a -= b;
};

function multiply(a, b){
    return a *= b;
};

function divide(a, b){
    if (b === 0) {
        alert("Can't divide by 0, STOOPID!");
    } else {
        return a /= b;
    }
};

const operatorFunctions = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};

function operate(a, b, operator){
     const operation = operatorFunctions[operator];
     if (operation) {
        return operation(a,b);
     } else {
        return "Invalid";
     }

};
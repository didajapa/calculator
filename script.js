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
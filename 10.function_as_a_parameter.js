function add(firstEl, secondEl){
    return firstEl+secondEl
}

function subtract(firstEl, secondEl){
    return firstEl-secondEl
}

function multiply(firstEl, secondEl){
    return firstEl*secondEl
}

function divide(firstEl, secondEl){
    return firstEl/secondEl
}

function doMath(firstEl, secondEl, fx){
    return fx(firstEl, secondEl)
}

var answer = doMath(4, 2, multiply);
console.log(answer);

console.log(doMath(3, 8, subtract));
console.log(doMath(5, 13, add));
console.log(doMath(3, 4, divide));
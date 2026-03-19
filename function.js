// FUNCTION DEFINITION
// function addition (a, b) {
//     c = a + b;
//     console.log("the addition of two numbers is:"+c);
// }
// FUNCTION CALLING
// addition(2, 2);

// FUNCTION WITHOUT PASSING PARAMETER
// function greet() {
//     console.log("Anshika Aggarwal🌷");
// }
// greet();

// function greet1(userName) {
//     console.log("welcome");
// }
// greet(anshika);

// function summation() {
//     const a = 10;
//     const b = 20;
//     console.log(a+b);
// }
// summation();
// summation(5,5);

// func def (named function)
// function summation(r, k) {
//     const result = r + k;
//     return result;
// }
// const result = summation(10, 20);
// console.log(result);

// ANONYMOUS FUNCTION // function expression anonymous means does not having name
// let sum = function (r, k) {
//     const result = r + k;
//     return result;
// }
// console.log(sum(20,20));

// NESTED FUNCTION: a function is nested with another function
function addSquares(x, y) {
    let result = 2;
    function square(num) {
        return num*num;
    }
    console.log(square(2));
    console.log(result);
    
}
addSquares(1,2);




// NAMED FUNCTION
// function greet() {
//     console.log("hey Everone!");
// }
// greet();


// ANONYMOUS FUNCTION / FUNCTION EXPRESSION
// let greet2 = function(){
//     console.log("hey Everyone!");
// }
// greet2();


// ARROW FUNCTION
// let greet3 = () => {
//     console.log("hey Everone!");
// }
// greet3();

// const greet = (count) => {
//     console.log("Hello Everyone!", count);
// }
// greet(2);

// const square = (num) => num*num
    // return num*num;

// console.log(square(2));

// CALLBACK FUNCTION
// const calculate = (a, b, operation) => {
//     return operation(a, b)
// }

// ANONYMOUS - METHOD 1
// const summation = calculate(5, 3, function(n1, n2){
//     return n1+n2;
// })
// console.log(summation);

// NAMED FUNCTION - METHOD
// function sub(a, b){
//     return a - b;
// }
// const subtraction = calculate(10, 3, sub)
// console.log(subtraction);

// ARROW FUNCTION - METHOD 3
// const mul = (a, b) => a*b
// const multiplication = calculate(2, 3, mul)
// console.log(multiplication);




// console.log(calculate(2, 3, function(n1, n2) {
//     return n1+n2;
// }));


const arr = [2,5,6,8,9,0,-3,-5,-2];

// METHOD-1
// const printFirstNegativeNumber = (num) => num<0

// METHOD-2
// const printFirstNegativeNumber = (num) => {
//     return num<0;
// }

// METHOD-3
// const printFirstNegativeNumber = (num) => {
//     if(num<0){
//         return num;
//     }
// }

// const result = arr.find(printFirstNegativeNumber)
// const result = arr.findIndex(printFirstNegativeNumber)
// console.log(result);


arr.forEach((num, index) => {
    console.log(num, index);  
})




function addFunction(num1, num2, showResult, message) {
    var result = num1 + num2;
    if (showResult) {
        console.log("".concat(message, " ").concat(result));
    }
    else {
        console.log("Show result is false");
    }
}
var number1 = 5;
var number2 = 2.4;
var showResult = true;
var message = 'Sum is : ';
console.log(addFunction(number1, number2, showResult, message));

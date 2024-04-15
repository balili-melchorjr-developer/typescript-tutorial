function addFunction(num1 : number, num2 : number, showResult : boolean, message : string){
    const result = num1 + num2
    if(showResult) {
        console.log(`${message} ${result}`)
    } else {
        console.log("Show result is false")
    }
}

const number1 = 5
const number2 = 2.4
const showResult = true
const message = 'Sum is : '

console.log(addFunction(number1, number2, showResult, message))
function addition(number1, number2){
    return number1 + number2;
}
function subtruct (number1 , number2){
    return number1 - number2;
}
function multiply( number1 , number2){
    return number1 * number2;
}
function dividation ( number1 , number2){
    return number1 / number2;
}
function simpleCalculator(a ,b , operation){
    if(operation === "addition"){
        const result = addition(a,b);
        return result;
    }
    else if(operation ===  "subtruct"){
        const result = subtruct(a,b);
        return result;
    }
    else if (operation ==="multiply"){
        const result = multiply (a,b);
        return result;
    }
    else if (operation === "dividation"){
        return dividation (a,b);
    }
    else{
        return "operation is not allowed"
    }
}
 
let calculator = simpleCalculator(2,2 ,"addition");
console.log(calculator);
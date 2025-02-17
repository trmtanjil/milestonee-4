
function validation(number1, number2){
    if( typeof number1 !== 'number' ||  typeof number2 !=="number"){
        console.log("please enter the number ");
    }
    return number1 * number2;
}
// console.log(validation(2,"dsfds"));

function validsecond(number1, number2){
    if(typeof number1 !=="string"){
        return "plese fist filup string number : "
    }
    else if( typeof number2 !=="string"){
        return "plese second filup string number : "
    }
    else{
        return number1+" "+number2;
    }
}
const string = validsecond("dsa",'ewr')
console.log(string);
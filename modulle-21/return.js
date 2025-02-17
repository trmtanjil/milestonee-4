function retrnFung(number){
    const newNum = number*5;
    // console.log(newNum);
     return newNum;
}
retrnFung(5)

const result = retrnFung(9);
// console.log(result);

function multiMath(bill1,bill2){
    const b1_2_1= bill1+bill2;
    const b1_2_2=bill1-bill2;
    const bilMain= b1_2_1*b1_2_2;
    return bilMain;
}
multiMath(10,20);
const mainOutp = multiMath(10,30)
// console.log(mainOutp);
// console.log(multiMath(51,5));

function numbEven(numbers){
    if(numbers%2==0){
        console.log(`the number is even ${numbers} number`);
    }
    else{
        console.log(`the number is odd ${numbers} number`);
    }
        return numbers;
}
// console.log(numbEven(1));


function isOdd(oddNumber){
    if(oddNumber%2===1){
        return true
    }
    else{
        return false;
    }

}
console.log(isOdd(10));
console.log(isOdd(1));
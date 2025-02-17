//!Task-1
//Take four parameters. Multiply the four numbers and then return the result

function odEven(number1,numbers2, numbers3,numbers4){
  console.log(number1,numbers2,numbers3,numbers4);
}
//  odEven(10,20,30,40)

//!Task-2
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiply(multipl){
    if(multipl % 2 ===1){
        let mylt = multipl *2;
        return mylt;
    }
    else{
        let divid =multipl /2;
        return divid
    }
}
// console.log(multiply(10));
// console.log(multiply(13));

//!Task-3
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(numbers){
//     let sum= 0;
//     for(const number of numbers){
//         console.log(number);
//         sum= sum+number;
//     }
//     const avrg = Number(sum/numbers.length).toFixed(2);
//     return avrg;
// }
// const result =make_avg([10,20,30,40]);
// console.log(result);

function make_avg (array , size){
    let sum = 0 ;
    for(let i= 0; i<size; i++){
        sum +=array[i];
    }
    return sum/size;
}
let numbers=[10,20,30];
// console.log(make_avg(numbers, numbers.length));

//!Task-4
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){
    let count=0;
    for(let i=0; i< binary.length; i++){
        if(binary[i] === "0"){
            count++;
        }
    }
    return count;
}
let result = count_zero("010101010101010101001010101010101010101001");
// console.log("The number of 0 is", result);

//!Task-5
//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function add_even(oddEven){
if (oddEven%2===0){
    return `the number is ${oddEven} even`
}
    return `the number is ${oddEven} odd`
}

let add_evenc= add_even(21);
console.log(add_evenc);
//!Task-1:
//Write a function to convert temperature from Celsius to Fahrenheit.

function celfar(clfr){
 
    const Celsius = (clfr*9/5)+32;
    const parsin = parseInt(Celsius)
    console.log(parsin);
    const celpart = parsin - Celsius;
    const parsinn = parsin + " degree "+ celpart.toFixed(1) + " fahrenheit ";
    return  parsinn ;


    
}

// const result = celfar(5);
// console.log(result);

//!Task-2:
//You are given an array of numbers. Count how many times the a number is repeated in the array.


const number = [1,1,1,1,1,2,3,1,4,2,1,3,4,4,5,54,4,43,];
// console.log(mostNum(number));

function mostNum(err){
    let count={};
    for(let num of err){
        count[num] = (count[num] || 0)+1;
    }
  return count;
}



// function mostNum(numValue){
//     let valuofi= [];
//     let sume =0;
//      for(let i= 0; i<numValue.length; i++){
//         valuofi.push(numValue);

//         if(sume.has(number) sume[number]++){

//         }
//    } 
// }


        // let numbersngl = 0;
        // for(let sameValue of valuofi){
            //    if(sameValue[i] && sameValue[i]){
                //       numbersngl = numbersngl+sameValue;
                //     }
                // }
                // console.log(numbersngl);


    
//!Task-3:
// Write a function to count the number of vowels in a string.

// let word = "developer";
// let vowelcount = countvowels(word);

// function countvowels(word){
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for(let i = 0; i< word.length; i++){
//         if(vowels.indexOf(word[i]) !==-1){
//             count++
//         }
//     }
//     return count;
// }
// console.log(word, vowelcount);

 
let words = " ( ami tomake valo vasina tomi valona j )";
let avareag = vowelCount(words);

function vowelCount(words){
    let vowel = "aeiouAEIOU";
    let count = 0;
    for(let i=0; i<words.length; i++){
        if(vowel.indexOf(words[i]) !==-1){
            count++;

        }
    }
    return count;
}


// console.log("the word is "+ words+" all vowel word is " +avareag );

//!Task-4:
//Write a function to find the longest word in a given string.

let string = ["you", "was","my","heard",'jtiadnnjeie'];
let bigFane = string[0];

for(let i =0; i<string.length; i++){
    const element = string[i];
    if(element.length>bigFane.length){
        bigFane = element
    }
}
console.log(bigFane);





// let result = longeststr(string);
// function longeststr(string){
//     let bigFane = string[0];
//    for(let i=0; i<string.length; i++){
//     if(bigFane.length>string.length){
//         bigFane = i;
//     }
//    }
//    return bigFane;
// }


// console.log(result);


//!Task-5:
//Generate a random number between 10 to 20.
 

let random= 20;
function randomNumber(random){
for(let i=10; i<random ; i++){
    let result = Math.ceil(Math.random()*i )+10 ;
    // console.log(result);
    return result;
}
    
}
console.log(randomNumber(random));


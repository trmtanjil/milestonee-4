//!Task 1
//Write a JavaScript code to reverse the array colors without using the reverse method.

let lenear = ['red', 'blue', 'green', 'yellow', 'orange'];
let revers = [];
for(let i=lenear.length-1; i>=0; i--){
    revers.push(lenear[i]);
}
// console.log(revers);
//!sort
let main = lenear.slice().reverse();
// console.log(main);

//!Task 2
//Write a JavaScript code to get the even numbers from an array using any looping technique.

let evenNum = [12, 98, 5, 41, 23, 78, 46];

for(let i =0; i<evenNum.length; i++){
    if(evenNum[i]%2===0){
        // console.log(`this number is even ${evenNum[i]}`);
    }
}

//!Task 3
//Use a for...of loop to concatenate all the elements of an array into a single string.

const numbers =  ['Tom', 'Tim', 'Tin', 'Tik']
let result = "";
for(let concat of numbers){
    result =result+concat;
}
// console.log(result);

//!Task 4 (Hard)
//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statments = 'i am a hard working person';
const wort = statments.split(" ");
const reversss =[];
for(let i=wort.length-1; i>=0;i--){
reversss.push(wort[i])
}
console.log(reversss.join(" "));
// console.log(wort);
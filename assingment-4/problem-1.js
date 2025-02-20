
// function avrgVote(vote){
//  let mango = 0;
//  let banana = 0;

//  for(let i=0; i<vote.length; i++){
//     let votts = vote[i]
//     if(votts === mango){
//         mango++;
//     }
//     else if(votts ===banana)
//  }
// }

// let result = avrgVote( ['banana', 'mango'])
// console.log(result);









































// !               Problem-01 : Calculate the cash-out Charge     5


function casheOut(money) {
    if(typeof money !=='number' ){
return "invalid" ;
}
else if( money<0){
return "invalid"
}
let percent = money * 1.75/100;
return percent;
}
// console.log(casheOut(0.5));


            // ! Problem-02 : Detect email  valid or not            4

function validEmail( email ) {
let spacialCrtr = '-_.@!"#$%&()*+';
if(Array.isArray(email)){
return 'invalid'
}
else if(typeof email !=='string'){
return 'invalid';
}
else if(spacialCrtr.includes(email.charAt(0))){
return false;
}
else if(email.includes('@')==false){
return false;
}
else if(email.includes(' ')){
return false;
}
else if (email.endsWith('.com') ==false){
return false;
}
return true;
}
// console.log(validEmail(["hero@alom@com"]));


                // !Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )       3
function electionResult( votes ) {

let mango = 0;
let banana =0;
if(!Array.isArray(votes)){
return "invalid";
}
for(let i=0; i<votes.length; i++){
let vot = votes[i];
if(vot === "mango"){
mango++;
}
else if(vot==="banana"){
banana++;
}
}
if(mango>banana){
return "Mango";
}
else if (banana>mango){
return "Banana";
}
else{
return "Draw"
}
}
    // console.log(electionResult('banana','mango', 'banana' ));

        // !Problem-04: Detect The Perfect Best Friend   2
function isBestFriend( f1 , f2 ) {
if(typeof f1 !== 'object' || typeof f2 !== 'object' ){
return 'invalid';
}
if(f1.bestFriend ===f2.roll && f2.bestFriend ===f1.roll){
return true;
}
else{
return false
}
}
// console.log(isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 },
//     { name: "kashem", roll: 2, bestFriend: 1 }
//     ));

                // !Problem-05: Let’s Calculate Video watch Time     1
function calculateWatchTime( times ) {
let sum = 0;
for(let allTime of times){
sum = sum + allTime;
if(typeof sum === 'string'){
return 'invalid'
}
}
let hower = Math.floor(sum/3600);
let remainSec = sum%3600;
let minut = Math.floor(remainSec/60);
let mainSec = remainSec % 60;
return {hower:hower, minut:minut, second:mainSec}
}
// console.log(calculateWatchTime('dsfs'));
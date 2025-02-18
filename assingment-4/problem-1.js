
// function casheOut(money) {
//     if(typeof money !=='number' ){
//         return "invalid" ;
//     }
//     else if( money<0){
//         return "invalid"
//     }
//     let percent = money *1.75/100;
//     return percent;
// }
// let number =casheOut("mewauu");
 
// console.log(number);



 





// function  validEmail( email ) {
//    let spacialCrtr = '-_.@!"#$%&()*+';
 
//    if(Array.isArray(email)){
//     return 'invalid'
//    }
//    else if(typeof email !=='string'){
//     return 'invalid';
//    }
//    else if(spacialCrtr.includes(email.charAt(0))){
//     return false;
//    }
//    else if(email.includes('@')==false){
//     return false;
//    }
//    else if(email.includes(' ')){
//     return false;
//    }
//    else if (email.endsWith('.com') ==false){
//     return false;
//    }
//    return true;
// }
// let email= validEmail("he ro@alom.com");
// console.log(email);








// function  electionResult( votes ) {
//      let mango = 0;
//      let banana =0;

//      if(!Array.isArray(votes)){
//         return "invalid";
//      }
//      for(let i=0; i<votes.length; i++){
//         let vot = votes[i];
//         if(vot === "mango"){
//             mango++;
//         }
//     else if(vot==="banana"){
//         banana++;
//     }
//      }
//      if(mango>banana){
//         return "Mango";
//      }
//      else if (banana>mango){
//         return "Banana";
//      }
//      else{
//         return "Draw"
//      }  
// }
// let resust = electionResult(["mango", "banana", "mango", "banana", "mango"]
// );
// console.log(resust);





// function  isBestFriend( f1 , f2 ) {
//     if(typeof f1 !== 'object' || typeof f2 !== 'object' ){
//         return 'invalid';
//     }
//    if(f1.bestFriend ===f2.roll && f2.bestFriend ===f1.roll){
//     return true;
//    }
//    else{
//     return false
//    }
// }
// let obj1 ={ name: "hashem", roll: 2, bestFriend: 1}
// let obj2 =  { name: "kashem", roll: 1, bestFriend: 2 }

// console.log(isBestFriend(obj1, obj2));
 

function  calculateWatchTime( times ) {
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
let resust = calculateWatchTime([100, 3800, "90" ]);
console.log(resust);

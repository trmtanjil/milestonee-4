const height = [12,23,3,2,23,43,433,43,54,1000];

function largestNum (height){
    let count = height[0];
    for( let item of height){
        if(item>count){
            count = item;
        }
    }
    return count
}
// console.log(largestNum(height));







//!count min 

let minNumber = [10,2,12,3,2,1,-9];
let count =minNumber[0];
function minNumberCount(minNumber){
    for(let min of minNumber){
        if(min<count){
            count = min
        }
    }
    return count
}
console.log(minNumberCount(minNumber));
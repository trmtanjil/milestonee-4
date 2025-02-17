function evenOddSum (evenoddsumm){
    let sum =0;
    if(evenoddsumm%2===0){
        sum = sum+evenoddsumm;
    }
    return sum
}
// console.log(evenOddSum(10));

function evenOdddSum(evodsm){
    let even =[];
    for(let sumAll of evodsm){
       if(sumAll%2===0){
        console.log(sumAll);
        even.push(sumAll);
       }
    }
    return even;

     
}

let evodsm= [ 10,20,23,43,12];
// console.log(evenOdddSum(evodsm));

function odSumm (sumoddd){
    let od = 0;
    for(let summ of sumoddd){
        if(summ%2===1){
            console.log(`the sum is odd ${summ}`);
           od = od + summ;
        }
        
    }
    return od;
}
let sumoddd=[10,33,3];
console.log(odSumm(sumoddd));
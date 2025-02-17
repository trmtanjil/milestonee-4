

function odAvrage(odNumber){
    let oddd = [];
    for(let odd of odNumber){
        if(odd % 2 ==1){
        oddd.push(odd)
    }
}
    let sum =0;
    for(let oddSum of oddd){
        sum = sum+ oddSum;
    }
        let odLenth = oddd.length;
       const odasum =  sum / odLenth;
       console.log(sum, odLenth);
       return odasum;
     
}

// let odresult = [1,2,3 ];
// console.log(odAvrage(odresult));



let eversult = [2,3,2,4,6,6];
console.log(evenEveragNumber(eversult));

function evenEveragNumber(eveEverage){
    let evenCount = [];
   for(let evenNumber of eveEverage){
    if(evenNumber %2==0){
        evenCount.push(evenNumber)
    }
}
    let evenAvRslt = 0;
 for(let evenall of evenCount){
    evenAvRslt = evenAvRslt + evenall;
}
let evenLength = evenCount.length;
console.log(evenAvRslt, evenLength);
let evenDividation = evenAvRslt / evenLength;
return  evenDividation ;
}
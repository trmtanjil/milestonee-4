let afrin = 10;
let tahsir = 20;
let nadim = 110;

function greterNumber(afrin, tahsir, nadim){
    if(afrin > tahsir && afrin>nadim){
        console.log("afrin get the dalicius cake , " , afrin);
    }
    else if(tahsir>afrin && tahsir>nadim){
        console.log("tahsin get the dalicius cake ", tahsir);
    }
    else{
        console.log("nadim get the dalicius cake ", nadim);
    }
    return afrin, tahsir, nadim;
}

console.log(object);

 //!part2
function greterNumber(aafrin, ttahsir, nnadim){
    if(aafrin > ttahsir && aafrin>nnadim){
        // console.log("afrin get the dalicius cake , " , afrin);
        return  aafrin;  
    }
    else if(ttahsir>aafrin && ttahsir>nnadim){
        // console.log("tahsin get the dalicius cake " , tahsir);
        return  ttahsir; 
    }
    else{
        // console.log("nadim get the dalicius cake " , nadim);
        return nnadim  
    }
     
}
let max1 = greterNumber(12,11112,222);
let max2 = greterNumber(12,33,44114);
let max3 = greterNumber(1000,5000,1)
let allmax = greterNumber(max1,max2,max3)
 console.log('max of three ',allmax);
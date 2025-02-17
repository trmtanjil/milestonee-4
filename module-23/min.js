const minNumber = [12,45,,546,45,3,324];

function minNumFind(minNumber){
    let minCount = minNumber[0];
    for(let Number of minNumber){
        if(minCount>Number){
            minCount = Number;
        }
    }
    return minCount;
}

console.log(minNumFind(minNumber));
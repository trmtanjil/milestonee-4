
function biryanilist(biryani){
    let single = [];
    for(let includ of biryani){
        if(single.includes(includ) === false){
            single.push(includ);
        }
    }
    return single;
}




let biryaniKhor = ["tanjil", "tanjil", "tanvir", "rana", "abul", "rana"];
// console.log(biryanilist(biryaniKhor));





let numberIcld= [1,2,1,3,21,313,12,3,42,12,324,12,12,3,12,2,2,2 ,2,1,12,12,12,12];
console.log(numberIncludes(numberIcld));

function numberIncludes(incld){
    let includess = [];
    for(let number of incld){
        if(includess.includes(number) ===false ){
            includess.push(number);
            // console.log(number);
        }
    }
    return includess;
}
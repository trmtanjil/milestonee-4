function size_strng(str){
    const size= str.length;
    if(size%2===0){
        console.log(`the string is even ${size} size`);
    }
    else{
        console.log(`the string is odd ${size} size`);
    }
    return size;
}
// console.log(size_strng("tanjill"));
// console.log(size_strng("op"));

function doublTreepl(number,double){
    if(double ===true){
        const result = number*2;
        return result;
    }
    else{
        const result = number*3;
        return result
    }
}
// console.log(doublTreepl(10, true));
// console.log(doublTreepl(10, false));

function arrayLangth(length){
    const len = length.length;
    return len;
}
console.log(arrayLangth([10,20,30,23,323,4,3,4,42]));
console.log(arrayLangth([10,20,30,23,323,4,3,4,4232,3,23,23,4]));
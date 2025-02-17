
function casheOut(money) {
    if(typeof money !=='number' ){
        return "invalid" ;
    }
    else if( money<0){
        return "invalid"
    }
    let percent = money *1.75/100;
    return percent;
}
let number =casheOut(1000);
console.log(number);



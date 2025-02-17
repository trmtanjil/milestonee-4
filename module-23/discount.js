/**
 * upto 100: ---> 100
 * more then 101: --> 90
 * more than 200: -- 70
 */

function disCountPrice(quantity){
    if(quantity<=100){
        const total = quantity *100;
        return total;
    }
    else if (quantity <=101){
        const tatol = quantity *90;
        return tatol;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const price = disCountPrice(121);
console.log(price);


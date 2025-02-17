/**
 * upto 100: ---> 100
 * more then 101: --> 90
 * more than 200: -- 70
 */

function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const avob200price = 70;

    if(quantity<=100){
        const total =quantity * first100Price ;
        return total;
    }
    else if (quantity <=200){
        const first100total = 100 * first100Price;
 
        const remainingQuantity  = quantity -100 ;
        const second100avrg = remainingQuantity * second100Price;
        const total = first100total + second100avrg;
        return total;
    }
   else{
    const avob100total = 100 * first100Price;
    const avob200total = 100 * second100Price;
    const avob200remainng = quantity - 200;
    const remaintotal = avob200remainng * avob200price;
    const total = avob100total + avob200total + remaintotal;
    return total ; 
   }
}
let totalPriceis = layeredDiscountedTotal(201);
console.log("total price is ", totalPriceis);
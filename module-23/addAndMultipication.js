

function averageWod(chearQuantity, tableQuantity,badQuantity){
    let perchearWod = 3;
    let perTableWod = 5;
    let perBadWod = 10;

    let chearTotalWod = perchearWod * chearQuantity;
    let tableTotalWod = perTableWod * tableQuantity;
    let batTotalWod = perBadWod * badQuantity;

    let wodNided = chearTotalWod + tableTotalWod + batTotalWod;
    return wodNided;

}
let wod = averageWod(2,2,3);
// console.log("total wod nidded" , wod);

//task2

function totalshopingPrice(shirtQuantity, pantQuantity, SheoQuantity){
   let shirPrice = 400;
   let pantPrice = 300;
   let sheoPrice = 900;

   let shirtTotalPrice = shirPrice * shirtQuantity;
   console.log("shirt total price : ",shirtTotalPrice);
   let pantTotalPrice = pantPrice * pantQuantity;
   console.log(" pent total price : ", pantTotalPrice);
   let sheoTotalPrice = sheoPrice * SheoQuantity;
   console.log("sheo total price : ", sheoTotalPrice);

    let totalPrice = shirtTotalPrice + pantTotalPrice + sheoTotalPrice;
    return   totalPrice ;
}
let price = totalshopingPrice(1,1,1);
console.log("total shoping price : ",price);
//!Task -1:
//Find the lowest number in the array below.

// const number = [510,21,433,641 ,400];

// function lowNumber(number){
//     let count = number[0];
// for(let lowest of number){
//     if(lowest <count){
//         count = lowest;
//     }
// }
// return count;
// }
// const result = lowNumber(number);
// console.log(result);

//!Task -2:
//Find the friend with the smallest name.

const nume = ["tanjil ", "tanvir", "khaabib", "joir", "lkas", "trm"];

function lowestName(name){
   let nameCount = name[0];
   for(let i=0; i<name.length; i++){
    let namei = name[i]
    if(namei.length<nameCount.length){
        nameCount = namei;
    }
   }
   return nameCount;
}
const resultName =  lowestName(nume);
// console.log(resultName);

//!Task-3:
//Your task is to calculate the total budget required to buy electronics:
//laptop = 35000 tk
//tablet = 15000 tk
//mobile = 20000 tk

function calculateElectronicsBudget(laptopQuantity, tabletQuantity,mobileQuantity){
   let laptopPrice = 35000;
   let tabletPrice = 15000;
   let mobilePrice = 20000;

   let laptoTotal =  laptopPrice * laptopQuantity;
   console.log("total laptop price : ", laptoTotal,"tk");
   let tabletTotal = tabletPrice * tabletQuantity ;
   console.log("total tablet price : ", tabletTotal ,"tk");
   let mobileTotal = mobilePrice * mobileQuantity;
   console.log("total mobile price : ", mobileTotal ,"tk");
   
   let productTotalPrice = laptoTotal + tabletTotal + mobileTotal;
  return productTotalPrice
}
// const result = calculateElectronicsBudget(2,1,1);
// console.log("the price of all of them :" ,result, "tk");

//!Task-4:
//You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(averagePrice){
    let priceCount = 0;
    for (let phnPrs of averagePrice){
        let phnAllPrice = phnPrs.price
        console.log("phon price is : ", phnAllPrice);
        let average = phnAllPrice / phones.length
         priceCount = priceCount + average
        }
        return priceCount
}
let totalPrice = findAveragePhonePrice(phones)
console.log("averrage price is : ", totalPrice);




// function  electionResult(votes) {
//     let winMan = {};
//     let maxvote='';
//     let mostVote = 0;
//     let draw = [];

//     if(!Array.isArray(votes)){
//         return 'invalid'
//     } 
//     else if(votes.length<0){
//         return "Draw";
//     }


//     for(let item of votes){  
//     if(winMan[item]){
//         winMan[item] = winMan[item]+1;
//     }
//     else{
//         winMan[item]=1;
//     }
// }
//     for(let mostv in winMan){
//         if(winMan[mostv]>mostVote){
//             maxvote = mostv;
//             mostVote =winMan[mostv];
//         } 
//         if (winMan[mostv] === mostVote) {
//             draw.push(mostv);
//         }
//     }
//     if (draw.length > 1) {
//     return "Draw";
// }
//     return maxvote
// }
// let resust =electionResult (["mango", "banana", "mango", "banana", "mango"]);
// console.log(resust);
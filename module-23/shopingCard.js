const totalProductPrice = [
    {name: "shampo", price: 230, quantity: 3,},
 
    {name: "parfium", price: 330, quantity: 2,},
    {name: "heareoill", price: 530, quantity: 3,},
    {name: "shirt", price: 1000, quantity: 4,},
    {name: "pant", price: 1500, quantity: 2,},
]

function allProductpQuan(totalproduct){
    let sum =0 ;
    for(let productAll of totalproduct){
        console.log("product+");
       sum = sum +productAll.price* productAll.quantity;
       console.log(sum);
    }
    return sum
}

let priceAllShoping= allProductpQuan(totalProductPrice);
console.log("allProdunt Price is : ", priceAllShoping);
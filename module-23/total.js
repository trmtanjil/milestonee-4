const totalProductPrice = [
    {name: "shampo", price: 230,},
    {name: "parfium", price: 330,},
    {name: "heareoill", price: 530,},
    {name: "shirt", price: 1000,},
    {name: "pant", price: 1500,},
]

function allProductPrice(totalProductPricee){
    let sum=0
    for(let price of totalProductPricee){
        console.log(price);
        // if(price.price = sum.price ){
            sum = sum + price.price;
        // }
    }
    return sum
}
let price= allProductPrice(totalProductPrice)
console.log("total price product : ", price)
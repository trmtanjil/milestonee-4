const product = [
    {name: 'car', price: 200000,},
    {name: 'honda', price : 10000}
]
// console.log(product[0]);
// console.log(product[1]);


const Product = {
    '0': 14,
    '1': 39,
    '2':23
};
let sum = 0;
let values =Object.values(Product)
for(let i=0; i<values.length; i++){
    let valus = values[i];
    sum = sum+ valus;
}
console.log(sum);

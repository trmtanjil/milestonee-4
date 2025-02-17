// code driven function incocatrion 
function mameInfo(name, age, birth, dey, religion){
    console.log("hllw"  + name +" im "+ age +" years old "+ "my birth is" + birth + dey +" my religion in"+ religion);
}
mameInfo(" im tanjil, " , 22, 2002,  " islam ")


// event Diven oncocation function
function clickk(){
    console.log("subsCribe");
}
document.getElementById("btn").addEventListener("click",clickk);

// Automatic (self - invoked ) invocation funtion
(function(messege){
    console.log(" i am self-inbokeing Funtion ",messege);
})("this is self invoked function");


    //   funton variable declere
let maths = function(x,y){
    return x+y*x/y;
}
console.log(maths(2,3));


let numbers = [10, 20, 30, 40];
let squreNumber = numbers.map(function(number){
    return number * number;
});
console.log(squreNumber);
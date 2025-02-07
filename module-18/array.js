let martize = ["salam", "barkat", "rafik", "jabbar"];

        //   !includes 
/* let lockingg = (martize.includes("salam"));

if (lockingg == "barkat"){
    console.log("barkat is our lider in 1952");
}
else if(lockingg == "salam"){
    console.log("salam is our lider in 1952");
}
else{
    console.log("locking other person");
} */

if(martize.includes("salam")){
    console.log("salam is our leader in 1952");
}
else{
    console.log("loocking other person");
}

    // !indexof

    console.log(martize.indexOf("salam"));
    console.log(martize.indexOf("rafik"));


    // founding Array 

let x= 121;
let y = "tanjil";

console.log(Array.isArray(x));
console.log(Array.isArray(martize));
console.log(Array.isArray(y));
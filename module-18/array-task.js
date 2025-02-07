    //   task 1  Declare an array 

let a_array = [10, 20, 30, 40, 50]
a_array[3] = 10;
console.log(a_array[3]);
console.log(a_array);

// task 2 Add or remove elements
let touristSpt = ["bandarban", "jangamati", "coxbazar" , "jangamati", "coxbazar"];

touristSpt.push("lalmonirhat");
touristSpt.push("dreemholiday-park" ,"nagoriya kandi");
console.log(touristSpt);

touristSpt.pop('-1');
console.log(touristSpt);

// task 3   Checking Array Membership with ‘includes’

let boolSp = ["bangla", "herryPotter", "terzan", "showlife"];
console.log(boolSp);

if (boolSp.includes("showlife")){
    console.log("book is found");
}
else{
    console.log("im not locking book ");
}
// console.log(boolSp);

// task 4 Checking if it's an Array

let x = 343;
let y = "well";
let z = [11, 112]

console.log(Array.isArray(x));
console.log(Array.isArray(y));
console.log(Array.isArray(z));

// task 5 Combining Arrays

let p = [10, 2, 30, 40];
let q = [50, 60, 70, 80];
let s = [90, 100 ]
// let r = p+q;
let main= p.concat(q ,s);

console.log(main);
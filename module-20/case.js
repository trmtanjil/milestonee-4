const subject = "chemistry";
const book = "Chemistry";

//problem
if(subject === book){
    //console.log("im intarested in this subject");
}
else{
    // console.log("i cannot chois this subject");
}

//sollution you can solv it to use uppercase or lowarcase 
//uppercase: ABC 
//lowercase : abc
if(subject.toLocaleLowerCase === book.toLocaleLowerCase){
    //console.log("im intarested in this subject");
}
else{
    console.log("i cannot chois this subject");
}

// let Email = "tanjil9339@gmail.com";
// let Number = '018679130';

// if(Email &&  "tanjil9339@gmail.com"){
//     if(Number && '018 679130'){
//        console.log("eeer"); 
//     }
//     console.log("current your phon number");
// }

// string space problem
// trim  x
//  trimend trimstart

let water = " water";
let waters = "water";

// problem spacing
if(water === waters ){
    console.log("this water drinking good for health");
}
else{
    console.log("thers is poison in this water ");
}

// sollution spaching 
if(water.trim === waters.trim){
    console.log("this water drinking good for health");
}
else{
    console.log("thers is poison in this water ");
}



//12 inc 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    console.log(feet);
    return feet;

}
function inchToFeet2(inch){
    const feetFraction= inch/12;
    const persInt = parseInt(feetFraction)
    const contand = inch%12;
    const result = persInt + " feet "+ contand+ ' inch '
    return result;
}
// const inchToFet = inchToFeet2(100);
// console.log(inchToFet);

//gramm to kg

function grammToKg(grmkg){
    const kg = grmkg*1000;
    const parsInt = parseInt(kg);
    const pointMark = grmkg % 1000;
    const result = parsInt +" kg " + pointMark + "gramm";
    return result;
}
const grammToKgg = grammToKg(12);
console.log(grammToKgg);
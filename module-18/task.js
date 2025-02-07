// task 1 

let burger = 5100;

if(burger >500){
   burger =   "burger with free  water";
}
else{
    burger =   "burger with free  coke";
}
console.log(burger);

// task 2 BMI calculator and health category 

let weight = 50;
let height = 1.6764;
let bmi = (weight)/(height * height)
console.log(bmi);

// let bmi =28;

if(bmi<18.5){
    console.log("Your are under weight ");
}
else if(bmi >18.5 ,bmi <=24.9){
    console.log("you are normal");
}
else if(bmi>=25 , bmi<=29.9){
    console.log("you are overweight");
}
else{
    console.log("you re obese");
}


// let heightt = 1.64;
// let weight = 80;
// let bmi = (weight)/(heightt *heightt);
// console.log(bmi);
// if(bmi<18.5){
//     console.log("you are under weight");
// }
// else if (bmi>=18.5 , bmi <=24 ){
//     console.log("you are normal");
// }
// else if (bmi >=24.1 , bmi<=29){
//     console.log("you are over height");
// }
// else{
//     console.log("you re obese");
// }

//   task 3 rsult macking 
let result =61;
if (result>=80){
    console.log('A+');
}else if (result>=70){
    console.log('A');
}
else if (result>=60){
    console.log('D');

}
else if (result>=33){
    console.log('pass');

}
else{
    console.log('faill');
}

// task 4  if you get more then 80 then inside your griend score

let score = 80;

if(score>=79 && score <=79){
    console.log("im verry sed");
}
else if(score>=80){
    console.log("lets go for lunch");
}
else if(score<=80 && score >=60){
    console.log("lets go for good lunch");
}
else if(score>60 && score >=40){
    console.log("i will not see your messege");
}
else if (score<40){
    console.log("i will block you ");
}

// ternari operator 

let age = 10;
let scoree = age >= 20 ? 'she is adult ': "she is child";
console.log(scoree);
 
let tNmbr = score >= 60? (score >=80) ? "this is vary good perform": "this is normal perform ":"this is very bad";
console.log(tNmbr);

// fals value 
var gmail =null ;

if (gmail){
    console.log("submited");
}
else{
    console.log("enter the gmail");
}
console.log(typeof gmail);

// switch case 

let theame = "b";
let theame_type;

switch(theame){
    case "white":
        theame_type= "apply the white theame";
        break

    case "dark":
        theame_type = "apply teh dark theame";
        break
    case "blue":
        theame_type = "apply the blue theame";
        break
    default:
        theame_type = "system theame";
    
}
console.log(theame_type);
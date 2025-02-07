                //  javaScript condition if else

let age = 11;
if (age>18 ){
    console.log('you are ready  to open a google acccount, ');
}
else if (age>10){
    console.log('you ar a young mane;');
}
else{
    console.log('you are children,');
}

let result =61;
if (result>99){
    console.log('A+');
}else if (result>70){
    console.log('A');
}
else if (result>60){
    console.log('A-');

}
else if (result>33){
    console.log('pass');

}
else{
    console.log('faill');
}

let category = 'bike';
let cartype;

switch (category){
    case 'car':
        cartype = 'this is a car';
        break;
    case 'bike':
        cartype = 'this is a bike';
        break;
    case 'truck':
        cartype = 'this is a truck';
        break;
    default:
        cartype = 'unknown vehicle category';

}
console.log(cartype);

let sallery = 25000;
let height = 51;
let bcs= true;
hasCar = true

if(sallery >=25000 && height >=5.5){
    console.log("so.................. patro");
}
else{
    console.log("onno patro khoji ");
}
            //    || operator

if(sallery >=22000 || height >=11){
    console.log('come hear baba  kobol');
}else{
    console.log("get out s~~~~~ mokbol");
}

        // complex condition 

if ((sallery >26000 && bcs==true) || height ==true){
    console.log("you will come");
}
else{
    console.log("you are a leazy mane");
}

if((sallery > 27000 || hasCar == true) && bcs == false){
    console.log("come heare ");
}else{
    console.log("get out");
}
                  


//    discount price 
 
let pricee =    1000 ;
if (pricee>=5000 ){
    let discountt = pricee*10 /100;
    let afPrice = pricee - discountt;
    console.log(afPrice);
}
else if (pricee>=4000 ){
    let discountt = pricee*5 /100;
    let afPrice = pricee - discountt;
    console.log(afPrice);
}
else if (pricee>=2000 ){
    let discountt = pricee*3 /100;
    let afPrice = pricee - discountt;
    console.log(afPrice);
}
else{
    console.log(pricee);
}

            // resturant price 

let priceee = 1000;
let agee = 20;
if(agee >=60){
    let priceIs = priceee *50 /100;
    let payBill = priceee - priceIs;
    console.log(payBill);
}
else if (agee >=25){
    let priceIs = priceee *10/100;
    let payBill = priceee - priceIs;
    console.log(payBill);
}
else if (agee >=13){
    let priceIs = priceee *10/100;
    let payBill = priceee- priceIs;
    console.log(payBill);
}
else{
    console.log(pricee);
}


// nested condition 

let taka = 100;
if(taka > 500){
    console.log("boro you are a rich kit you are my frind");
}
else{
    if(taka >= 100){
        console.log("Bro you are middle person you are not ok");
    }
    else{
        if(taka >=10){
            console.log("dear friend you buy banana and push your ...........");
        }
        else{
            console.log("this is human behavior");
        }
    }
}



/**
 * TERNARY  --> three
 * 
 *     ?     :
 * 
 *    condition ?  do something when true : do something when false
 *   
 */
// let ageee = 18;
// ageee >= 22 ? console.log("vote dio") : console.log("ghumai thako");

let pprice = 1000;
let liderr = true;
// if (liderr === false){
//     pprice = 0;
// }
// else{
//     pprice= pprice+ 100;
// }
// console.log(pprice);
 
 

// pprice = liderr === true ? 0 : pprice + 1000;
// console.log(pprice);

//    semi advanch ternary 

if(liderr == true){
    if(pprice >1000){
        pprice = pprice /2;
    }
    else{
        pricee=0;
    }
}
else{
    pricee = pricee;
}
console.log(pprice);

pprice = liderr === true ? pricee >   1000 ? pricee/2 :0 : pricee + 100;
console.log(pprice);


if (liderr){
    console.log("lider is comming");
}
else{
    console.log("giv up all chere");
}

        //   false chacking 

let passed = false;

if(passed === false){
    console.log('you are good boy');
}
else{
    console.log('you aree bad boy ');
}

if(!passed){

}

        // double not ligical operator 

if(!!passed){
    console.log("good");
}
else{
    console.log("bad");
}
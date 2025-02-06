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

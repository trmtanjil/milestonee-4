 //! object 

//  const newObject = {
//     name : "janjil",
//     age : 12,
//     education : "HSC",
//     Home : "narsingdi",
//     gf   : false,
//     note: "porgrammer have no gf"
//  };
//  console.log(newObject);

                                            //!Property
 const newObject = {
    name : "janjil",
    age : 12,
    education : "HSC",
    Home : "narsingdi",
    gf   : false,
    havir:["spannig mony, bey heppines"],
    note: {
        info: "programmer has no gf",
        life : "very heard ",
    },
    "mobile qualification" : ["camara  19mp, lanch true"],
    
 };
 console.log(newObject);
//  console.log(newObject.note); //!dot notation 
 console.log(newObject["mobile qualification"]); //!squar notation

                    //! chang valu 
         
const employ = {
    "job name": "developer",
    sallery : 20000,
    age: 22,
    work_time: "10 hour",
    bonnus : 1000,
}
employ.bonnus=100000; //dot notation 
// console.log(employ); 
const proffetion = ["job name"]
employ["age"] = 25;
console.log(employ);
// console.log(employ[proffetion]);

const profation = ["job name"];
employ[profation]='student';
console.log(employ);
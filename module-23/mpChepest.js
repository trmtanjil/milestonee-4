

function minMobilePrice (mobileInfo){
    let lowCount = mobileInfo[0]
    for(let mobile of mobileInfo){
        if(mobile.price<lowCount.price){
           lowCount = mobile;
        }
    }
    return lowCount;
}
const mobileInfo= [
    {mobile: "samsunng", price: 510000, camara: "120mx", color: "black" },
    {mobile: "iphon", price: 100000, camara: "22mx", color: "white" },
    {mobile: "samphony", price: 20000, camara: "2mx", color: "green" },
    {mobile: "nokiya", price: 2000, camara: "2mx", color: "green" },
    {mobile: "walton", price: 2000, camara: "21mx", color: "yollow" },
]
// console.log(minMobilePrice(mobileInfo));

function chepesMobile(mobileInfoo){
    let lowCount = mobileInfo[0]
    for(let mobile of mobileInfoo){
        if(mobile.price>lowCount.price){
            lowCount = mobile;
        }

    }
    return lowCount;
}
console.log(chepesMobile(mobileInfo));


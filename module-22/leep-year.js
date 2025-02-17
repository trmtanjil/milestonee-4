function leepYear(leep){
    for(let year of leep){
        if(year % 4 ===0 && year %100!==0){
          return true
        }
        else if (year % 400 ==0){
          return  true
        }
        else{
            return false;
        }
    }
     
}

const leepyear = leepYear(21000);
console.log(leepyear);
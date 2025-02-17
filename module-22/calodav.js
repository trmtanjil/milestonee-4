function oddAvarage(odd){
    let avrg =[];
    for(let i=1; i<odd.length; i++){
        if(odd[i] %2===1){
            avrg.push(odd[i]);
        }   
    }
    let sum = 0;
    for(let add of avrg){
        sum = sum + add;
    }
    const count  = avrg.length
    let result =sum/count
   return result
}
const oddAv = oddAvarage([10,15,15]);
console.log(oddAv);
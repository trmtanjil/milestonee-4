function dublicet (dulct){
    const single = [];
    for(let persondv of dulct){
        if(single.includes(persondv) ===false){
            single.push(persondv)
           
        }
    }
    return single
}

// const prnt = dublicet(["tanjil", "tanjil","tanvir","tanvir", "rana", "maruf"])
const prnt = dublicet([11,11,11,22,3,44,55,55,6,7,7n])
console.log(prnt);
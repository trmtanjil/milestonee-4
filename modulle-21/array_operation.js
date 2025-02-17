function operation(sum_srg){
    let sum= 0;
    for(let i=1; i<=sum_srg.length;i++)
    // for(let i of sum_srg)
    {
        console.log(i);
        sum = sum+i;
    }
    return sum;
}
console.log(operation([1,2,3,4,5,6,7,8]));
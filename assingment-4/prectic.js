
function avrgVote(vote){
let mango = 0;
let banana = 0;

for(let i=0; i<vote.length; i++){
    let allVote = vote[i];
    if(allVote == "mango"){
        mango++;
    }
    else if(allVote== "banana"){
        banana++;
    }
}
if(mango>banana){
    return "Mango";
}
else if(banana>mango){
    return "Banana";
}
else{
    return 'Draw'
}
}
   
let result = avrgVote(['banana', 'mango','mango']);
console.log(result);
   
   


function avrgVote(vote){
    let mango = 0;
    let banana = 0;
   
    for(let i=0; i<vote.length; i++){
       let votts = vote[i]
       if(votts == mango){
           mango++;
       }
       else if(votts == banana){
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

            return 'draw'
        }
   }
   
   let result = avrgVote( ['banana', 'mango','mango']);
   console.log(result);
   
   

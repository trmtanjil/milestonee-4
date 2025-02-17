 const on_lop = {
    name: 'tanjil',
    profetion:'student',
    height:5.5,
    weight:61,
    newFung:function(){
       return(`my name is ${this.name} my profetion is ${this.profetion}`);
    },
 }

 console.log(on_lop.newFung());
 
 for(let i in on_lop){
   //  console.log(i);
   //  console.log(on_lop[i]);
 }
let key = Object.keys.on_lop

for(let key in on_lop){
   // console.log(n);
   // console.log(key);
   // console.log(key, on_lop[key]);
}

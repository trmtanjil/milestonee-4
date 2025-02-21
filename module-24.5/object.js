const student = {
    name: 'tanjil',
    id:2322,
    address: 'narsingdi',
    friends:['sharif','kader','raihan'],
    car:{
        'car name': 'tesla',
        price: 5000000,
        brand:{
            name: 'taskla',
            ceo: 'elon mask',
        }
    },
    hobey:['singing','song', 'songType',{
        song: 'qwali',

    }],
  func:  function(){
        console.log('my name is tanjil');
    }
}
console.log(student.car["car name"]);
console.log(student.hobey);
console.log(student.func);
student.func();
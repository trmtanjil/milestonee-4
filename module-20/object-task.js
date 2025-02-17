//!Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": 'dsjfalkfj'
};
// console.log(colors['golden rod']);

//!For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    'passenger capacity':{
        capacity: 5,
    },
};
// console.log(car);

//!Display the physics marks as output.

const student= {
    name : "tanjilur Rahman",
    id: 7438,
    physics:{
        subject:"hsc physics",
        autrhor : "shahjahan tapan ",
        marks: 30
    }
}
// console.log(student.physics.marks);

//!Count the number of properties.

const students = {
    name: "tanjil",
    age: 21,
    City:'narsingdi',
    isStudents: true
}
const ob_length = Object.keys(students).length;
// console.log(ob_length);

//!Loop through an object and print the key-value pairs with their types


const student_info ={
    name: "tanjil",
    age: 22,
    country:'bangladesh',
    student:true
}
for (let key in student_info){
    let value = student_info[key]
    let all_Value_key = `key: ${key} value: ${value} | value type ${typeof value}`
    // console.log(all_Value_key);
}
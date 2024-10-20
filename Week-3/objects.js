//JS objects
const car = {type:"Fiat", model:"500", color:"white"};     
console.log(car);
console.log(car.model)
//destructing
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a)
//spread operator
const person = { name : 'aatiqa' , age :16, isMarried : false,};
const person2={...person , salary: 700000};
console.log(person2)
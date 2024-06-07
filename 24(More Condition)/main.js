"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "Daniyal";
let name2 = "Daniyal";
//equality,inequality test
console.log(name1 == name2); //true
console.log(name1 != name2); //false
//lower case test
console.log(name1.toLowerCase() == name2.toLowerCase()); //true
console.log(name1 == name2.toLowerCase()); //false
//Numeric Test
let num1 = 10;
let num2 = 5;
console.log(num1 != num2); //true
console.log(num1 == num2); //false
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//and operator
let num3 = 10;
let num4 = 7;
let num5 = 3;
console.log(num3 > num4 && num5 <= num4); //true
console.log(num4 >= num5 && num3 == num5); //false
//or operator
console.log(num3 != num4 || num5 > num4); //true
console.log(num4 == num5 || num4 >= num3); //false
//check item in array
let cars = ["Honda", "Toyota", "Suzuki", "Audi"];
console.log(cars.includes("Toyota")); //true
console.log(cars.includes("BMW")); //false

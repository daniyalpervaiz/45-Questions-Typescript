let name1: string = "Daniyal"
let name2: string = "Daniyal"
//equality,inequality test
console.log(name1 == name2);//true
console.log(name1 != name2);//false
//lower case test
console.log(name1.toLowerCase() == name2.toLowerCase());//true
console.log(name1 == name2.toLowerCase());//false

//Numeric Test
let num1: number = 10
let num2: number = 5
console.log(num1 != num2);//true
console.log(num1 == num2);//false
console.log(num1 > num2);//true
console.log(num1 < num2);//false
console.log(num1 >= num2);//true
console.log(num1 <= num2);//false

//and operator
let num3: number = 10
let num4: number = 7
let num5: number = 3
console.log(num3 > num4 && num5 <= num4);//true
console.log(num4 >= num5 && num3 == num5);//false

//or operator
console.log(num3 != num4 || num5 > num4);//true
console.log(num4 == num5 || num4 >= num3);//false

//check item in array
let cars: string[] = ["Honda", "Toyota", "Suzuki", "Audi"]
console.log(cars.includes("Toyota"));//true
console.log(cars.includes("BMW"));//false
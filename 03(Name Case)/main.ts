let personName: string = "dAniyal peRvaiz"
console.log("Lower Case=", personName.toLowerCase());
console.log("Upper Case=", personName.toUpperCase());
console.log("Title Case=", personName.split(" ").map((word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())).join(" "));

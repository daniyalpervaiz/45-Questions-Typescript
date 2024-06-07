function make_shirt(size:string="large",message:string="I love TypeScript"){
console.log(`Making Shirt size is ${size} with message ${message} `)
}
make_shirt()// print default message with default size large
make_shirt("large")//print large size with default message
make_shirt("medium")// print medium size with default message
make_shirt("small","I love JS")//print any size with different message



function show_magicians(magician:string[]){
    magician.forEach(ele=>{
        console.log(ele)
    })
    }
    function make_great(magician:string[]){
       return magician.map(ele=>
        `The Great ${ele}`
       )
    
    }
    let magicians_names:string[]=["David Copperfield","Teller","Criss Angel","Derren Brown"]
    
let copyArray_MagicianName=[...magicians_names]
let copyof_TheGreat=make_great(copyArray_MagicianName)
console.log("Original")
show_magicians(magicians_names)
console.log("Copy")
show_magicians(copyof_TheGreat)
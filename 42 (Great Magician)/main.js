"use strict";
function show_magicians(magician) {
    magician.forEach(ele => {
        console.log(ele);
    });
}
function make_great(magician) {
    return magician.map(ele => `The Great ${ele}`);
}
let magicians_names = ["David Copperfield", "Teller", "Criss Angel", "Derren Brown"];
let modified_List = make_great(magicians_names); //modify function
show_magicians(modified_List); //actually list been modified.

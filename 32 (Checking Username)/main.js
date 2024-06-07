"use strict";
let curent_userName = ["Adnan", "Ali", "Ahsan", "Aslam", "Raja"];
let new_userName = ["Irfan", "Khurram", "Adnan", "RAJA", "Mustafa"];
new_userName.forEach(names => {
    let lowercase_Name = names.toLowerCase();
    if (curent_userName.map(current_name => current_name.toLowerCase()).includes(lowercase_Name)) {
        console.log(`userName ${names} is not available `);
    }
    else {
        console.log(`username ${names} is available`);
    }
});

let curent_userName: string[] = ["Adnan", "Ali", "Ahsan", "Aslam", "Raja"]
let new_userName: string[] = ["Irfan", "Khurram", "Adnan", "RAJA", "Mustafa"]
new_userName.forEach(names => {
    let lowercase_Name: string = names.toLowerCase()

    if (curent_userName.map(current_name => current_name.toLowerCase()).includes(lowercase_Name)) {
        console.log(`userName ${names} is not available `)
    }

    else {
        console.log(`username ${names} is available`)
    }

})
let userName:string[]=["admin","ali","ahsan","adnan","aslam"]
for(let users of userName){
    if (users==="admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${users},thank you for logging in again.`)
    }
}
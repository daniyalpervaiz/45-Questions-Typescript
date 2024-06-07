let userName:string[]=["admin",'ali',"ahsan","adnan","aslam"]
if (userName.length===0){
    console.log("We need to find some users!");
}
else{
    console.log("User here")
}
// print user is here 

//now remove user from array
userName.splice(0,5)
console.log(userName);
if (userName.length===0){
    console.log("We need to find some users!");
}
else{
    console.log("user here")
}
//now print we need to find some users
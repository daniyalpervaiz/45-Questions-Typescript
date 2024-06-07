let guest_List: string[] = ["Fahad", "Naveed", "Faisal", "Qaiser", "Abdullah", "Nabeel"]
console.log("We are very Sorry,the Table won't arrive in time,so we can invite only 2 Guests");
//Removing Guest from array
while (guest_List.length > 2) {
    let remove_Guest = guest_List.pop();
    console.log(`Dear ${remove_Guest},Sorry you are not invited`);
}

//inviting remained 2 Guest
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear ${guest_List[i]},Your are still invited.Thank you`)
}
//Remove 2 Guest from array,Now array is empty
guest_List.splice(0, 2)
console.log(guest_List);
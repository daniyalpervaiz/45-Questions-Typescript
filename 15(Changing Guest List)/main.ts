let guest_List: string[] = ["Naveed", "Qaiser", "Ubaid"]
let not_comingGuest: string = "Ubaid";
console.log(`${not_comingGuest},cannot attend the dinner`);

//replace Ubaid to Abdullah
guest_List.splice(2, 2, "Abdullah")

for (let i = 0; i < guest_List.length; i++) {
    console.log(`Dear ${guest_List[i]},you are inviting to dinner`)
}





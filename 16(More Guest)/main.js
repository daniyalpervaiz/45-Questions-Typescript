//Starting from Q15
var guest_List = ["Naveed", "Qaiser", "Abdullah"];
console.log("We found a bigger dinner table so we are inviting 3 more guest");
//Add one guest at the begaining of array
guest_List.unshift("Fahad");
//Add one guest at middle of array
guest_List.splice(2, 0, "Faisal");
//Add one guest at the end of array
guest_List.push("Nabeel");
//invitation of 6 guest
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], ",You are inviting to dinner.Thank You!"));
}

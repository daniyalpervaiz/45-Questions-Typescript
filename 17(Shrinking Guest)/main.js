var guest_List = ["Fahad", "Naveed", "Faisal", "Qaiser", "Abdullah", "Nabeel"];
console.log("We are very Sorry,the Table won't arrive in time,so we can invite only 2 Guests");
while (guest_List.length > 2) {
    var remove_Guest = guest_List.pop();
    console.log("Dear ".concat(remove_Guest, ",Sorry you are not invited"));
}
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], ",Your are still invited.Thank you"));
}
guest_List.splice(0, 2);
console.log(guest_List);

var guest_List = ["Naveed", "Qaiser", "Ubaid"];
var not_comingGuest = "Ubaid";
console.log("".concat(not_comingGuest, ",cannot attend the dinner"));
//replace Ubaid to Abdullah
guest_List.splice(2, 2, "Abdullah");
for (var i = 0; i < guest_List.length; i++) {
    console.log("Dear ".concat(guest_List[i], ",you are inviting to dinner"));
}

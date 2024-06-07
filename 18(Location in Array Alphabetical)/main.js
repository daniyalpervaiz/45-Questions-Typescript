var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fav_Places = ["Canada", "Switzerland", "Japan", "America", "France"];
console.log(fav_Places); //original
console.log(__spreadArray([], fav_Places, true).sort()); //copy but in alphabetical order
console.log(fav_Places); //original
console.log(__spreadArray([], fav_Places, true).sort().reverse()); //copy in reverse alphabetical order
console.log(fav_Places); //original
console.log(fav_Places.reverse()); //reverse Original
console.log(fav_Places.reverse()); //original
console.log(fav_Places.sort()); //original change to alphabetical order
console.log(fav_Places.reverse()); //original change to reverse alphabetical order

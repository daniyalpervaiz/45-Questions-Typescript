var userName = ["admin", "ali", "ahsan", "adnan", "aslam"];
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var users = userName_1[_i];
    if (users === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users, ",thank you for logging in again."));
    }
}

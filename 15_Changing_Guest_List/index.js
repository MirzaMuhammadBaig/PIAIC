var guestList = ['Mirza', 'Muhammad', 'Baig'];
var guestUnableToMakeIt = guestList[1];
for (var i = 0; i < guestList.length; i++) {
    if (guestList[i] == guestUnableToMakeIt) {
        console.log("\"".concat(guestList[i], "\" is unable to attend the dinner.\n__________________________________________"));
        guestList[1] = 'Blockchain Dev';
    }
    console.log("\nDear ".concat(guestList[i], ",\nYou are cordially invited to dinner.\n_________________________________________"));
}

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ['Mirza', 'Muhammad', 'Baig', 'Abdullah', 'Haider', 'Eman'];
console.log("Guests List:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("-", guest);
}
console.log("\nNumber of people invited to dinner: ".concat(guestList.length));

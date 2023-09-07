var guestList = ['Mirza', 'Muhammad', 'Baig', 'Abdullah', 'Haider', 'Eman'];
var namesOfRemovedGuests = ['Baig', 'Abdullah', 'Haider', 'Eman'];
console.log("Sorry, we can only invite two people for dinner.\n___________________________________________________");
for (var i = 0; i < guestList.length; i++) {
    for (var j = 0; j < namesOfRemovedGuests.length; j++) {
        if (guestList[i] === namesOfRemovedGuests[j]) {
            console.log("\nSorry, ".concat(guestList[i], ". We won't be able to invite you to dinner this time.\n___________________________________________________"));
            guestList.splice(i, 1);
        }
    }
    if (guestList[i] != undefined) {
        console.log("\nDear ".concat(guestList[i], ",\nYou are still invited to dinner.\nSincerely,\nPIAIC\n_____________________________________________________"));
    }
}
guestList = [];
console.log("Guest list:", guestList);

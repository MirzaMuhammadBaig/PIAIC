// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList: string[] = ['Mirza', 'Muhammad', 'Baig', 'Abdullah', 'Haider', 'Eman'];
let namesOfRemovedGuests:string[] = ['Baig', 'Abdullah', 'Haider', 'Eman'];

console.log("Sorry, we can only invite two people for dinner.\n___________________________________________________");

for (let i = 0; i < guestList.length; i++) {
    for(let j=0; j < namesOfRemovedGuests.length; j++){
        if(guestList[i] === namesOfRemovedGuests[j]){
            console.log(`\nSorry, ${guestList[i]}. We won't be able to invite you to dinner this time.\n___________________________________________________`);
            guestList.splice(i, 1);
        }
    }
    if(guestList[i] != undefined){
        console.log(`\nDear ${guestList[i]},\nYou are still invited to dinner.\nSincerely,\nPIAIC\n_____________________________________________________`);
    }
}

guestList = [];

console.log("Guest list:", guestList);

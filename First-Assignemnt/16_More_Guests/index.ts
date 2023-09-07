// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestList: string[] = ['Mirza', 'Muhammad', 'Baig'];
let guestUnableToMakeIt: string = guestList[1];

guestList.unshift('Abdullah');
guestList.splice(2, 0, 'Eman');
guestList.push('Haider');

console.log("Good news! We found a bigger dinner table!");

for (let i = 0; i < guestList.length; i++) {
    if(guestList[i] == guestUnableToMakeIt){
        console.log(`\n"${guestList[i]}" is unable to attend the dinner.\n__________________________________________`);
        guestList[1] = 'Blockchain Dev';
    }
    console.log(`\nDear ${guestList[i]},\nYou are invited to dinner.\nSincerely,\nPIAIC\n_________________________________________________________`);
}

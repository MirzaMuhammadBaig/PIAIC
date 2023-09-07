// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList: string[] = ['Mirza', 'Muhammad', 'Baig'];
let guestUnableToMakeIt: string = guestList[1];

for (let i = 0; i < guestList.length; i++) {
    if(guestList[i] == guestUnableToMakeIt){
        console.log(`\n"${guestList[i]}" is unable to attend the dinner.\n__________________________________________`);
        guestList[1] = 'Blockchain Dev';
    }
    console.log(`\nDear ${guestList[i]},\nYou are cordially invited to dinner.\nSincerely,\nPIAIC\n_________________________________________________________`);
}

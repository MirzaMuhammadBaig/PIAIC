let guestList: string[] = ['Mirza', 'Muhammad', 'Baig'];
let guestUnableToMakeIt: string = guestList[1];

for (let i = 0; i < guestList.length; i++) {
    if(guestList[i] == guestUnableToMakeIt){
        console.log(`\n"${guestList[i]}" is unable to attend the dinner.\n__________________________________________`);
        guestList[1] = 'Blockchain Dev';
    }
    console.log(`\nDear ${guestList[i]},\nYou are cordially invited to dinner.\nSincerely,\nPIAIC\n_________________________________________________________`);
}

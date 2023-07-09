// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = ['Mirza', 'Muhammad', 'Baig', 'Abdullah', 'Haider', 'Eman'];

console.log("Guests List:");
for (let guest of guestList) {
  console.log("-",guest);
}

console.log(`\nNumber of people invited to dinner: ${guestList.length}`);

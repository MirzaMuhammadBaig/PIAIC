// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    const greatMagician = magician + " the Great";
    greatMagicians.push(greatMagician);
  }
  return greatMagicians;
}

const magicianNames: string[] = [
  "Magician 1",
  "Magician 2",
  "Magician 3",
  "Magician 4",
];

const magicianNamesCopy: string[] = magicianNames.slice();

const greatMagicians: string[] = makeGreat(magicianNamesCopy);

showMagicians(magicianNames); // Original array
console.log("-------------------------");
showMagicians(greatMagicians); // Modified array

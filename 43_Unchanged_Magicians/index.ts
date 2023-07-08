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

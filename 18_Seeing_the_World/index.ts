let placesToVisit: string[] = ['Makka', 'Kashmir', 'Afghanistan', 'Madina', 'Turkey'];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order (without modifying the actual list):");
console.log(placesToVisit.slice().sort());

console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order (without modifying the actual list):");
console.log(placesToVisit.slice().sort().reverse());

console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

console.log("\nReversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nReversed Order Again (back to the original order):");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);

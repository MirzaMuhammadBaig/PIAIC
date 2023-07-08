// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ['dog', 'cat', 'rabbit'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log();

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  let statement = "";

  if (animal === 'dog') {
    statement = "A dog would make a great pet.";
  } else if (animal === 'cat') {
    statement = "A cat would make a great pet.";
  } else if (animal === 'rabbit') {
    statement = "A rabbit would make a great pet.";
  }

  console.log(statement);
}

console.log();
console.log("These animals have in common that they are popular choices as pets.\n");
console.log("Any of these animals would make a great pet!");

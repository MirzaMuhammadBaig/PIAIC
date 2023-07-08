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

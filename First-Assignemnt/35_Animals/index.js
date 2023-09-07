var animals = ['dog', 'cat', 'rabbit'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log();
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    var statement = "";
    if (animal === 'dog') {
        statement = "A dog would make a great pet.";
    }
    else if (animal === 'cat') {
        statement = "A cat would make a great pet.";
    }
    else if (animal === 'rabbit') {
        statement = "A rabbit would make a great pet.";
    }
    console.log(statement);
}
console.log();
console.log("These animals have in common that they are popular choices as pets.\n");
console.log("Any of these animals would make a great pet!");

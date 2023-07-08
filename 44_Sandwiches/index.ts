function make_sandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
      console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
  }
  
  make_sandwich("Bread", "Cheese", "Tomato", "Lettuce");
  make_sandwich("Bread", "Turkey", "Mayonnaise");
  make_sandwich("Bread", "Peanut Butter", "Jelly");
  
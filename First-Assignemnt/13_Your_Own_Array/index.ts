// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransportation: string[] = ['motorcycle', 'car', 'bicycle'];

for (let i = 0; i < favoriteTransportation.length; i++) {
  let transportation = favoriteTransportation[i];

  switch (transportation) {
    case 'motorcycle':
      console.log(`I would like to own a Honda motorcycle.`);
      break;
    case 'car':
      console.log(`I would like to own a Tesla car.`);
      break;
    case 'bicycle':
      console.log(`I would like to own a Specialized bicycle.`);
      break;
    default:
      console.log(`I have no preference for this mode of transportation.`);
  }
}

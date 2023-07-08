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

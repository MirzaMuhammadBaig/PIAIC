var favoriteTransportation = ['motorcycle', 'car', 'bicycle'];
for (var i = 0; i < favoriteTransportation.length; i++) {
    var transportation = favoriteTransportation[i];
    switch (transportation) {
        case 'motorcycle':
            console.log("I would like to own a Honda motorcycle.");
            break;
        case 'car':
            console.log("I would like to own a Tesla car.");
            break;
        case 'bicycle':
            console.log("I would like to own a Specialized bicycle.");
            break;
        default:
            console.log("I have no preference for this mode of transportation.");
    }
}

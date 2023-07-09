function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        var greatMagician = magician + " the Great";
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
var magicianNames = [
    "Magician 1",
    "Magician 2",
    "Magician 3",
    "Magician 4",
];
var magicianNamesCopy = magicianNames.slice();
var greatMagicians = makeGreat(magicianNamesCopy);
showMagicians(magicianNames); // Original array
console.log("-------------------------");
showMagicians(greatMagicians); // Modified array

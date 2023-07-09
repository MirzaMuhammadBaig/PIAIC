var myArray = [1, 2, 3, 4, 5];
var index = 5;
if (index >= 0 && index < myArray.length) {
    var value = myArray[index];
    console.log(value);
}
else {
    console.log("Index out of range!");
}
try {
    var value = myArray[index] = 6;
    console.log("\nNow, Index is not out of range!");
    console.log(value);
}
catch (error) {
    console.log("Index out of range!");
}

// Greetings: Start with the array you used in Exercise 11, but instead of just printing 
// each person’s name, print a message to them. The text of each message should be the 
// same, but each message should be personalized with the person’s name.

let names:string[] = ["Mirza", "Muhammad", "Baig"]; // Store the friend's names in name variable

let message1:string = "Hello! ";// Store the message in message variable

let message2:string = " I hope you are doing well.";// Store the message in message variable


for(let i = 0; i < names.length; i++){
    console.log(message1 + names[i] + "." + message2);
};
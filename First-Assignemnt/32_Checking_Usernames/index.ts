// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ['admin', 'Mirza', 'Muhammad', 'Baig', 'Blockchain Dev'];
let new_users: string[] = ['Muhammad', 'Abdullah', 'Eman', 'Haider', 'Blockchain DEV'];

for (let i = 0; i < new_users.length; i++) {
  let usernameExists: boolean = false;

  for (let j = 0; j < current_users.length; j++) {
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`);
  } else {
    console.log(`The username '${new_users[i]}' is available.`);
  }
}

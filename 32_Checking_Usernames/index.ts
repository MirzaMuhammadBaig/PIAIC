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

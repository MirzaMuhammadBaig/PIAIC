var current_users = ['admin', 'Mirza', 'Muhammad', 'Baig', 'Blockchain Dev'];
var new_users = ['Muhammad', 'Abdullah', 'Eman', 'Haider', 'Blockchain DEV'];
for (var i = 0; i < new_users.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("The username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_users[i], "' is available."));
    }
}

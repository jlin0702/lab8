//exercise 1
//function to validate password
function validate() {
    //gets each value
    let password = document.getElementById("pass").value;
    let verify = document.getElementById("verify").value;
    //compare values
    if (password != verify) {
        alert("Error! Passwords don't match!");
    }
    else if (password.length < 8) {
        alert("Error! Password must be at least 8 characters!");
    }
    else {
        alert("Valid!");
    }
}
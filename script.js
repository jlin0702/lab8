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

//exercise 2
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
let index = 0;
//function to go to previous image
function previous() {
    //check if currently at first image
    if (index == 0) {
        //go to last image
        index = images.length - 1;
    } else {
        //decrease index
        index--;
    }
    //change image
    document.getElementById("myImg").src = "images/" + images[index];
}
//function to go to next image
function next() {
    //check if currently at last image
    if (index == images.length - 1) {
        //go to first image
        index = 0;
    } else {
        //increase index
        index++;
    }
    //change image
    document.getElementById("myImg").src = "images/" + images[index];
}
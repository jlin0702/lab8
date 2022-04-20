//exercise 4
//changes the border and background color based on input
function change() {
    //gets the input values
    let bo_red = document.getElementById("bo_red").value;
    let bo_green = document.getElementById("bo_green").value;
    let bo_blue = document.getElementById("bo_blue").value;
    let width = document.getElementById("width").value;
    let bg_red = document.getElementById("bg_red").value;
    let bg_green = document.getElementById("bg_green").value;
    let bg_blue = document.getElementById("bg_blue").value;
    //gets the text
    let dummyText = document.getElementById("dummytext");
    //changes the style
    dummyText.style.borderColor = `rgb(${bo_red}, ${bo_green}, ${bo_blue})`;
    dummyText.style.borderWidth = width + "px";
    dummyText.style.backgroundColor = `rgb(${bg_red}, ${bg_green}, ${bg_blue})`;
}
// ELEMENTS SELECTION
const myImage = document.querySelector("#image");

console.log(myImage);

const myDivText = document.querySelector("#displayText");

console.log(myDivText);

// TRIGGERING EVENTS

// I want to test that i my mouse is hovered on the image

myImage.addEventListener("mouseover", function () {
    console.log("i hovered over the element with my mouse");
    myDivText.innerHTML = "Hello I am Hesh, I hovered on image";
});

myImage.addEventListener("mouseout", function () {
    myDivText.innerHTML = "";
});
console.log("Hello World");
var greenButton = document.getElementById("green")
console.log(greenButton);

greenButton.addEventListener("mouseover", callAlert);
greenButton.addEventListener("mouseout", orange);
function callAlert() {
    alert("you called?");
    greenButton.innerHTML = "I got clicked!";
    greenButton.innerHTML = "blue";
}
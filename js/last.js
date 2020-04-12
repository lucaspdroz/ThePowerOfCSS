
// Google button
let button = document.querySelector(".mic-button");

button.addEventListener("click", () => {
    document.querySelector(".mic").style.display = "none";
    document.querySelector(".color-blue").style.display = "block";
    document.querySelector(".color-red").style.display = "block";
    document.querySelector(".color-yellow").style.display = "block";
    document.querySelector(".color-green").style.display = "block";
}); 
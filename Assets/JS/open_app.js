const appSign = document.getElementById("app-sign");
const library = document.querySelector(".room");
const directions = document.getElementById("info-modal");
const closeDirectionsButton = document.querySelector(".info-close");

setTimeout (() => {
    appSign.style.top = "40vh";
    appSign.style.opacity = "0";
    appSign.style.backgroundImage = "background-image: linear-gradient(135deg, gold, goldenrod, gold, palegoldenrod);";
    appSign.style.color = "#fff9bb";
    appSign.style.textShadow = "5px 5px 2px darkgoldenrod";
    library.style.opacity = "1";
}, 600);

setTimeout (() => {
    directions.style.opacity = "1";
}, 1200);

closeDirectionsButton.addEventListener("click", () => {
    directions.style.display = "none";
});
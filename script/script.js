var button = document.getElementsByClassName("button"); 
var buttons = document.querySelectorAll("li");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        var allButtons = button.parentElement.querySelectorAll("li");

        allButtons.forEach(function(otherButton) {
            otherButton.style.backgroundColor = "#777777";
        });

        button.style.backgroundColor = "blue";

    });

});

const localPages = [
    "burnt.html",
    "frozen.html",
    "missing.html",
    "perfect.html",
    "raw.html"
];

Array.from(button).forEach((pageButton) => {
    pageButton.addEventListener("click", () => {
        const randomPage = localPages[Math.floor(Math.random() * localPages.length)];
        window.location.href = randomPage;
    });
});


// You can add JavaScript interactivity here if needed.
// For example, you can make the birthday wishes appear one by one with animations, or add a countdown timer to the birthday.

// Example: Show wishes one by one with a delay
const wishes = document.querySelectorAll(".birthday-wish");
wishes.forEach((wish, index) => {
    setTimeout(() => {
        wish.style.opacity = 1;
        wish.style.transform = "scale(1)";
    }, index * 1000);
});

// Function to open the pop-up with the given URL
function openPopup(url) {
    const popup = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    popupIframe.src = url;
    popup.style.display = "block";
    document.getElementById("popup-background").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
    const popup = document.getElementById("popup");
    const popupIframe = document.getElementById("popup-iframe");

    popupIframe.src = "";
    popup.style.display = "none";
    document.getElementById("popup-background").style.display = "none";
}

// Add click event listeners to each wish section to open the corresponding pop-up
document.getElementById("wish1").addEventListener("click", function () {
    openPopup("wish1.html"); // Replace with the actual URL you want to load
});

document.getElementById("wish2").addEventListener("click", function () {
    openPopup("wish2.html"); // Replace with the actual URL you want to load
});

document.getElementById("wish3").addEventListener("click", function () {
    openPopup("wish3.html"); // Replace with the actual URL you want to load
});

document.getElementById("wish4").addEventListener("click", function () {
    openPopup("wish4.html"); // Replace with the actual URL you want to load
});

document.getElementById("wish5").addEventListener("click", function () {
    openPopup("wish5.html"); // Replace with the actual URL you want to load
});

// Add click event listener to close button
document.getElementById("close-popup").addEventListener("click", closePopup);

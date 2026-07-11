// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        menuBtn.textContent = "☰";
    } else {
        nav.style.display = "flex";
        menuBtn.textContent = "X";
    }
});
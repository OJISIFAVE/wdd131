// Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005",
        area: 111500,
        imageUrl: "images/aba-nigeria-temple.jpg"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893",
        area: 253000,
        imageUrl: "images/salt-lake-temple.jpg"
    },

    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919",
        area: 42100,
        imageUrl: "images/laie-hawaii-temple.jpg"
    },

    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },

    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah",
        dedicated: "2016",
        area: 85000,
        imageUrl: "images/provo-city-center-temple.jpg"
    },

    {
        templeName: "Hong Kong China Temple",
        location: "Hong Kong",
        dedicated: "2020",
        area: 40000,
        imageUrl: "images/hong-kong-china-temple.jpg"
    },

    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019",
        area: 41000,
        imageUrl: "images/rome-italy-temple.jpg"
    },

    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980",
        area: 52900,
        imageUrl: "images/tokyo-japan-temple.jpg"
    },

    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017",
        area: 44000,
        imageUrl: "images/paris-france-temple.jpg"
    },

    {
        templeName: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: "1984",
        area: 26000,
        imageUrl: "images/Manila-Philippines-temple.jpg"
    }
];


// Select HTML elements
const container = document.querySelector("#temple-container");


// Create temple cards
function displayTemples(templeList) {

    container.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy">

            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        container.appendChild(card);

    });
}


// Filter functions

function filterTemples(type) {

    let filtered = temples;

    if (type === "old") {
        filtered = temples.filter(
            temple => Number(temple.dedicated) < 1900
        );
    }

    else if (type === "new") {
        filtered = temples.filter(
            temple => Number(temple.dedicated) > 2000
        );
    }

    else if (type === "large") {
        filtered = temples.filter(
            temple => temple.area > 90000
        );
    }

    else if (type === "small") {
        filtered = temples.filter(
            temple => temple.area < 10000
        );
    }

    displayTemples(filtered);
}


// Navigation Events

document.querySelector("#home")
.addEventListener("click", () => filterTemples("home"));

document.querySelector("#old")
.addEventListener("click", () => filterTemples("old"));

document.querySelector("#new")
.addEventListener("click", () => filterTemples("new"));

document.querySelector("#large")
.addEventListener("click", () => filterTemples("large"));

document.querySelector("#small")
.addEventListener("click", () => filterTemples("small"));


// Footer
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// Hamburger Menu

const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {
        nav.style.display = "none";
        menuBtn.textContent = "☰";
    }

    else {
        nav.style.display = "flex";
        menuBtn.textContent = "X";
    }

});


// Display all temples when page loads
displayTemples(temples);
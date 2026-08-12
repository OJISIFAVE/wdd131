const pets = [
    {
        id: 1,
        name: "Buddy",
        type: "dog",
        age: "2 years",
        description: "A friendly and playful dog who enjoys walks and companionship.",
        image: "images/buddy.jpg"
    },
    {
        id: 2,
        name: "Luna",
        type: "cat",
        age: "1 year",
        description: "A gentle cat who loves attention and relaxing in comfortable spaces.",
        image: "images/luna.jpg"
    },
    {
        id: 3,
        name: "Max",
        type: "dog",
        age: "3 years",
        description: "An energetic dog who would enjoy an active family and daily exercise.",
        image: "images/max.jpg"
    },
    {
        id: 4,
        name: "Milo",
        type: "cat",
        age: "2 years",
        description: "A curious and affectionate cat who enjoys exploring and playing.",
        image: "images/milo.jpg"
    },
    {
        id: 5,
        name: "Coco",
        type: "rabbit",
        age: "1 year",
        description: "A calm rabbit who enjoys gentle attention and a quiet environment.",
        image: "images/coco.jpg"
    },
    {
        id: 6,
        name: "Daisy",
        type: "dog",
        age: "4 years",
        description: "A loving dog who is happiest when spending time with people.",
        image: "images/daisy.jpg"
    }
];

let favorites = JSON.parse(localStorage.getItem("favoritePets")) || [];

function displayPets(petList) {
    const petGrid = document.querySelector("#petGrid");
    const petMessage = document.querySelector("#petMessage");

    if (!petGrid) {
        return;
    }

    if (petList.length === 0) {
        petGrid.innerHTML = `<p class="status-message">No pets match your selected category.</p>`;
        petMessage.textContent = `No pets were found for this selection.`;
        return;
    }

    petMessage.textContent = `${petList.length} pet${petList.length === 1 ? "" : "s"} available for adoption.`;

    petGrid.innerHTML = petList.map((pet) => `
        <article class="pet-card">
            <img
                src="${pet.image}"
                alt="${pet.name}, a ${pet.type} available for adoption"
                width="800"
                height="600"
                loading="lazy"
            >

            <div class="pet-card-content">
                <h3>${pet.name}</h3>
                <p class="pet-type">${pet.type} • ${pet.age}</p>
                <p>${pet.description}</p>
            </div>

            <button
                class="favorite-button ${favorites.includes(pet.id) ? "saved" : ""}"
                type="button"
                data-id="${pet.id}"
            >
                ${favorites.includes(pet.id) ? "♥ Saved Favorite" : "♡ Add to Favorites"}
            </button>
        </article>
    `).join("");

    addFavoriteListeners();
}

function filterPets() {
    const filter = document.querySelector("#petFilter");

    if (!filter) {
        return;
    }

    const selectedType = filter.value;

    if (selectedType === "all") {
        displayPets(pets);
    } else {
        const filteredPets = pets.filter((pet) => pet.type === selectedType);
        displayPets(filteredPets);
    }
}

function addFavoriteListeners() {
    const buttons = document.querySelectorAll(".favorite-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const petId = Number(button.dataset.id);
            toggleFavorite(petId);
        });
    });
}

function toggleFavorite(petId) {
    if (favorites.includes(petId)) {
        favorites = favorites.filter((id) => id !== petId);
    } else {
        favorites.push(petId);
    }

    localStorage.setItem("favoritePets", JSON.stringify(favorites));

    filterPets();
    displayFavorites();
}

function displayFavorites() {
    const favoritesMessage = document.querySelector("#favoritesMessage");

    if (!favoritesMessage) {
        return;
    }

    const favoritePets = pets.filter((pet) => favorites.includes(pet.id));

    if (favoritePets.length === 0) {
        favoritesMessage.textContent = `You have not saved any pets yet.`;
    } else {
        const names = favoritePets.map((pet) => pet.name).join(", ");
        favoritesMessage.textContent = `Your saved pets: ${names}.`;
    }
}

function showFavorites() {
    const favoritePets = pets.filter((pet) => favorites.includes(pet.id));

    if (favoritePets.length === 0) {
        displayPets([]);
    } else {
        displayPets(favoritePets);
    }
}

function setupNavigation() {
    const menuButton = document.querySelector("#menuButton");
    const mainNav = document.querySelector("#mainNav");

    if (!menuButton || !mainNav) {
        return;
    }

    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

function setupPetPage() {
    const filter = document.querySelector("#petFilter");
    const favoritesButton = document.querySelector("#favoritesButton");

    if (!filter) {
        return;
    }

    filter.addEventListener("change", filterPets);

    if (favoritesButton) {
        favoritesButton.addEventListener("click", showFavorites);
    }

    displayPets(pets);
    displayFavorites();
}

function setupAdoptionForm() {
    const form = document.querySelector("#adoptionForm");
    const formMessage = document.querySelector("#formMessage");

    if (!form || !formMessage) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#fullName").value.trim();
        const petType = document.querySelector("input[name='petType']:checked");

        if (!petType) {
            formMessage.textContent = `Please select the type of pet you are interested in.`;
            return;
        }

        localStorage.setItem("adoptionApplicant", name);

        formMessage.textContent = `Thank you, ${name}! Your interest in adopting a ${petType.value.toLowerCase()} has been recorded.`;

        form.reset();
    });
}

setupNavigation();
setupPetPage();
setupAdoptionForm();

const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor"
    },
    {
        id: "power-laces",
        name: "Power Laces"
    },
    {
        id: "hover-board",
        name: "Hover Board"
    },
    {
        id: "rocket-pack",
        name: "Rocket Pack"
    },
    {
        id: "time-machine",
        name: "Time Machine"
    }
];


const productSelect = document.querySelector("#productName");

if (productSelect) {

    products.forEach(product => {

        let option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);

    });

}



const reviewCount = document.querySelector("#reviewCount");

if (reviewCount) {

    let count = Number(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);

    reviewCount.textContent = count;

}
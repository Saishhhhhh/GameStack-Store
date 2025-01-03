const featuredGames = document.getElementById("featured");
const all = document.getElementById("all");
const action = document.getElementById("action");
const adventure = document.getElementById("adventure");
const casual = document.getElementById("casual");
const rpg = document.getElementById("rpg");
const simulation = document.getElementById("simulation");
const sports = document.getElementById("sports");
const strategy = document.getElementById("strategy");
const count = document.getElementById("cart-count");
const searchBar = document.getElementById("search-bar");
const gameCardsContainer = document.getElementById("game-cards-container");

let category = "featured";
initializeCartCount();

function initializeCartCount() {
    let storedCount = localStorage.getItem("cart-count");
    if (storedCount) {
        count.innerText = storedCount;
    } else {
        count.innerText = "0"; 
    }
}

function formatNumber(num) {
    return new Intl.NumberFormat("en-IN").format(num);
}

function displayGameCards(selectedCategory, query = "") {
    if (!gameCardsContainer) return;

    let innerHTML = "";

    videoGames.forEach((game) => {
        const matchesCategory =
            selectedCategory === "all" ||
            (selectedCategory === "featured" && game.featured) ||
            selectedCategory.toLowerCase() === game.genre.toLowerCase();

        const matchesQuery =
            game.item_name.toLowerCase().includes(query) ||
            game.company.toLowerCase().includes(query) ||
            game.description.toLowerCase().includes(query);

        if (matchesCategory && matchesQuery) {
            innerHTML += `
                <div class="col-lg-3 col-sm-6 col-12 game-card">
                    <img src="${game.image}" alt="${game.item_name} Image" class="${game.genre}">
                    <h5 class="game-company">${game.company}</h5>
                    <h3 class="game-title">${game.item_name}</h3>
                    <span class="game-description" style="display:none">${game.description}</span>
                    <div class="price-info">
                        <span class="discount-percentage">-${game.discount_percentage}%</span>
                        <span class="original-price">₹${formatNumber(game.original_price)}</span>
                        <span class="current-price">₹${formatNumber(game.current_price)}</span>
                    </div>
                    <p>
                        <button class="btn btn-primary btn-add-to-cart">Add To Cart</button>
                    </p>
                </div>
            `;
        }
    });

    gameCardsContainer.innerHTML = innerHTML || `<div class="text-center"><p>No results found.</p></div>`;
}

displayGameCards(category);

function updateActiveClass(clickedButton) {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => button.classList.remove("active"));
    clickedButton.classList.add("active");
}

featuredGames.addEventListener("click", function () {
    category = "featured";
    displayGameCards(category);
    updateActiveClass(this);
});

all.addEventListener("click", function () {
    category = "all";
    displayGameCards(category);
    updateActiveClass(this);
});

action.addEventListener("click", function () {
    category = "Action";
    displayGameCards(category);
    updateActiveClass(this);
});

adventure.addEventListener("click", function () {
    category = "Adventure";
    displayGameCards(category);
    updateActiveClass(this);
});

casual.addEventListener("click", function () {
    category = "Casual";
    displayGameCards(category);
    updateActiveClass(this);
});

rpg.addEventListener("click", function () {
    category = "RPG";
    displayGameCards(category);
    updateActiveClass(this);
});

simulation.addEventListener("click", function () {
    category = "Simulation";
    displayGameCards(category);
    updateActiveClass(this);
});

sports.addEventListener("click", function () {
    category = "Sports & Racing";
    displayGameCards(category);
    updateActiveClass(this);
});

strategy.addEventListener("click", function () {
    category = "Strategy";
    displayGameCards(category);
    updateActiveClass(this);
});

searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase();
    displayGameCards(category, query);
});

document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("btn-add-to-cart")) {
        alert("Item added to cart successfully!");
        count.innerText++;
        const newCount = parseInt(count.innerText);
        localStorage.setItem("cart-count", newCount);

        const card = event.target.closest(".game-card");
        const gameDetails = {
            image: card.querySelector("img").src,
            company: card.querySelector(".game-company").innerText,
            item_name: card.querySelector(".game-title").innerText,
            description: card.querySelector(".game-description").innerText,
            discount_percentage: card.querySelector(".discount-percentage").innerText,
            original_price: card.querySelector(".original-price").innerText,
            current_price: card.querySelector(".current-price").innerText,
        };

        const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
        cartItems.push(gameDetails);
        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }
});

searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const query = searchBar.value.toLowerCase();
        displayGameCards(category, query);
    }
});

searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase();
    displayGameCards(category, query);
});

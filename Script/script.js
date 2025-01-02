let featuredGames = document.getElementById("featured");
let all = document.getElementById("all");
let action = document.getElementById("action");
let adventure = document.getElementById("adventure");
let casual = document.getElementById("casual");
let rpg = document.getElementById("rpg");
let simulation = document.getElementById("simulation");
let sports = document.getElementById("sports");
let strategy = document.getElementById("strategy");
let count = document.getElementById("cart-count");


let category = "featured";

function initializeCartCount() {
    let storedCount = localStorage.getItem("cart-count");
    if (storedCount) {
        count.innerText = storedCount;
    } else {
        count.innerText = "0"; 
    }
}

initializeCartCount();

function displayGameCards(category){

    let gameCards = document.getElementById("game-cards-container")

    if(!gameCards){
        return;
    }

    let innerHTML = "";

    videoGames.forEach(function(game){

        if(category === "featured"){

            if(game.featured){
                
                innerHTML += `
            <div class="col-lg-3 col-sm-6 col-12 game-card">
                <img src="${game.image}" alt="${game.item_name} Image" class="${game.genre}">
                <h5 class="game-company">${game.company}</h5>
                <h3 class="game-title">${game.item_name}</h3>
                <span class="game-description" style="display:none">${game.description}%</span>
                <div class="price-info">
                    <span class="discount-percentage">-${game.discount_percentage}%</span>
                    <span class="original-price">₹${game.original_price}</span>
                    <span class="current-price">₹${game.current_price}</span>
                </div>
                <p>
                <button class="btn btn-primary btn-add-to-cart" id="addToCart">Add To Cart</button>
                </p>
            </div>
            `
            }    
        }

        if(category === "all" || game.genre == category){

            innerHTML += `
        <div class="col-lg-3 col-sm-6 col-12 game-card">
            <img src="${game.image}" alt="${game.item_name} Image" class="${game.genre}">
            <h5 class="game-company">${game.company}</h5>
            <h3 class="game-title">${game.item_name}</h3>
            <span class="game-description" style="display:none">-${game.description}%</span>
            <div class="price-info">
                <span class="discount-percentage">-${game.discount_percentage}%</span>
                <span class="original-price">₹${game.original_price}</span>
                <span class="current-price">₹${game.current_price}</span>
            </div>
            <p>
            <button class="btn btn-primary btn-add-to-cart" id="addToCart">Add To Cart</button>
            </p>
        </div>
        `
    }
    gameCards.innerHTML = innerHTML;
    })    
}

displayGameCards(category);

function updateActiveClass(clickedButton) {
    let buttons = document.querySelectorAll("#featured, #all, #action, #adventure, #casual, #rpg, #simulation, #sports, #strategy");
    buttons.forEach(button => button.classList.remove("active"));
    clickedButton.classList.add("active");
}

featuredGames.addEventListener("click", function(){
    category = "featured";
    displayGameCards(category);
    updateActiveClass(this);
});

all.addEventListener("click", function(){
    category = "all";
    displayGameCards(category);
    updateActiveClass(this);
});

action.addEventListener("click", function(){
    category = "Action";
    displayGameCards(category);
    updateActiveClass(this);
});

adventure.addEventListener("click", function(){
    category = "Adventure";
    displayGameCards(category);
    updateActiveClass(this);
});

casual.addEventListener("click", function(){
    category = "Casual";
    displayGameCards(category);
    updateActiveClass(this);
});

rpg.addEventListener("click", function(){
    category = "RPG";
    displayGameCards(category);
    updateActiveClass(this);
});

simulation.addEventListener("click", function(){
    category = "Simulation";
    displayGameCards(category);
    updateActiveClass(this);
});

sports.addEventListener("click", function(){
    category = "Sports & Racing";
    displayGameCards(category);
    updateActiveClass(this);
});

strategy.addEventListener("click", function(){
    category = "Strategy";
    displayGameCards(category);
    updateActiveClass(this);
});

document.addEventListener("click", function(event){
    if(event.target && event.target.classList.contains("btn-add-to-cart")){
        count.innerText++;
        let newCount = parseInt(count.innerText);

        localStorage.setItem("cart-count", newCount);
        // alert("Item added to cart!");

        let card = event.target.closest(".game-card");

        let gameDetails = {
            image: card.querySelector("img").src,
            company: card.querySelector(".game-company").innerText,
            item_name: card.querySelector(".game-title").innerText,
            description: card.querySelector(".game-description").innerText,
            discount_percentage: card.querySelector(".discount-percentage").innerText,
            original_price: card.querySelector(".original-price").innerText,
            current_price: card.querySelector(".current-price").innerText,
        }

        let cartItems;
        if (localStorage.getItem("cart-items")) {
            cartItems = JSON.parse(localStorage.getItem("cart-items"));
        } else {
            cartItems = [];
        }

        cartItems.push(gameDetails); 

        localStorage.setItem("cart-items", JSON.stringify(cartItems));
    }
})
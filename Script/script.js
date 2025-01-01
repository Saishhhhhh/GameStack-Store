console.log("Script Loaded");

function displayGameCards(){

    let gameCards = document.getElementById("game-cards-container")

    if(!gameCards){
        return;
    }
    let innerHTML = "";
    videoGames.forEach(function(game){
        innerHTML += `
        <div class="col-lg-3 col-sm-6 col-12 game-card">
            <img src="${game.image}" alt="${game.item_name} Image" class="${game.genre}">
            <h5 class="game-company">${game.company}</h5>
            <h3 class="game-title">${game.item_name}</h3>
            <div class="price-info">
                <span class="discount-percentage">-${game.discount_percentage}%</span>
                <span class="original-price">₹${game.original_price}</span>
                <span class="current-price">₹${game.current_price}</span>
            </div>
            <p>
            <button class="btn btn-primary btn-add-to-cart">Add To Cart</button>
            </p>
        </div>
        `
    })
    gameCards.innerHTML = innerHTML;
}

displayGameCards();
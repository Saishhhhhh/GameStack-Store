let cross = document.getElementById("cross-button");
let count = document.getElementById("cart-count");

let storedCount = localStorage.getItem("cart-count");

if(storedCount){
    count.innerText = storedCount;
}else{
    count.innerText = 0;
}

let cartContainer = document.getElementById("cart-container");

if(cartContainer){
    
    let cartItems; 
    if(localStorage.getItem("cart-items")){
        cartItems = JSON.parse(localStorage.getItem("cart-items"));
    }else{
        cartItems = [];
    }

    if(cartItems.length === 0){
        cartContainer.innerHTML = "<h2>Your cart is empty!</h2>";
    }else{
        let innerHTML = "";

        cartItems.forEach((item,index) => {
            innerHTML += `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.item_name}">
                </div>
                <div class="cart-item-details">
                    <p class="cart-item-company">${item.company}</p>
                    <h3 class="cart-item-title">${item.item_name}</h3>
                    <p class="cart-item-description">${item.description}</p>
                    <p class="cart-item-price">₹${item.current_price} <span class="cart-item-original-price">₹${item.original_price}</span></p>
                    <p class="cart-item-discount">${item.discount_percentage} off</p>
                </div>
                <button class="cart-item-remove" id = "cross-button">X</button>
            </div>
            `;
        });

        cartContainer.innerHTML = innerHTML;

        document.querySelectorAll(".cart-item-remove").forEach(button => {
            button.addEventListener("click", function () {

                const itemElement = button.closest(".cart-item");
                const index = parseInt(itemElement.dataset.index);

                cartItems.splice(index, 1);

                localStorage.setItem("cart-items", JSON.stringify(cartItems));
        
                count.innerText = Math.max(0, count.innerText - 1);
                localStorage.setItem("cart-count", count.innerText);
                
                itemElement.remove();
              
                if (cartItems.length === 0) {
                    cartContainer.innerHTML = "<h2>Your cart is empty!</h2>";
                }

            });
        });
    }    
}
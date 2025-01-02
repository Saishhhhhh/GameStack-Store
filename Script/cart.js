let cross = document.getElementById("cross-button");
let count = document.getElementById("cart-count");
let cartSum = document.getElementById("cart-summary");

function NumberFormatRupee(lol){
    let cleanedString = lol.replace(/[₹,]/g, '');
    // console.log(cleanedString);
    return cleanedString;
}

function formatNumber(num) {
    let lmao2 = new Intl.NumberFormat('en-IN').format(num);
    // console.log(lmao2);
    return lmao2;
}

let storedCount = localStorage.getItem("cart-count");

if(storedCount){
    count.innerText = storedCount;
}else{
    count.innerText = 0;
}

let cartContainer = document.getElementById("cart-container");

let TotalPrice = 0;
let TotalOriginalPrice = 0;
let TotalDiscount = 0;

let cartItems;
    if(localStorage.getItem("cart-items")){
        cartItems = JSON.parse(localStorage.getItem("cart-items"));
    }else{
        cartItems = [];
    }

if(cartContainer){
    

    if(cartItems.length === 0){
        cartContainer.innerHTML = "<h2>Your cart is empty!</h2>";
    }else{

        

        let innerHTML = "";

        cartItems.forEach((item,index) => {

            let cp = formatNumber(NumberFormatRupee(item.current_price));
            let op = formatNumber(NumberFormatRupee(item.original_price));

            innerHTML += `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.item_name}">
                </div>
                <div class="cart-item-details">
                    <p class="cart-item-company">${item.company}</p>
                    <h3 class="cart-item-title">${item.item_name}</h3>
                    <p class="cart-item-description">${item.description}</p>
                    <p class="cart-item-price">₹${cp} 
                    <span class="cart-item-original-price">₹${op}</span></p>
                    <p class="cart-item-discount">${item.discount_percentage} off</p>
                </div>
                <button class="cart-item-remove" id = "cross-button">X</button>
            </div>
            `;

            // console.log(cp);
            // console.log(op);

            let tempCP = parseInt(NumberFormatRupee(item.current_price));
            let tempOP = parseInt(NumberFormatRupee(item.original_price));
            
            TotalOriginalPrice += tempOP;
            TotalPrice += tempCP;
            TotalDiscount += (tempOP - tempCP);

            SummaryUpdation();

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

                SummaryUpdation();

            });
        });
    }    
}

function SummaryUpdation(){

    TotalPrice = 0;
    TotalOriginalPrice = 0;
    TotalDiscount = 0;

    cartItems.forEach(item => {
        let tempCP = parseInt(NumberFormatRupee(item.current_price));
        let tempOP = parseInt(NumberFormatRupee(item.original_price));

        TotalOriginalPrice += tempOP;
        TotalPrice += tempCP;
        TotalDiscount += (tempOP - tempCP);
    });

    function items(){
        if(count.innerText == 0 || count.innerText == 1){
            return "item";
        }else{
            return "items";
        }
    }
    
    cartSum.innerHTML = `

    <h2 class="cart-summary-heading">PRICE DETAILS (${count.innerText} ${items()})</h2>
    <div class="cart-summary-item">
        <p>Price</p>
        <p>₹${TotalOriginalPrice}</p>
    </div>
    <div class="cart-summary-item">
        <p>Discount on Price</p>
        <p>-₹${TotalDiscount}</p>
    </div>
    <div class="cart-separator"></div>
    <div class="cart-summary-total">
        <p>Total Amount</p>
        <p style="color: #FF3366;">₹${TotalPrice}</p>
    </div>
    <button class="btn btn-primary cart-summary-button">PLACE ORDER</button>
    `;
}


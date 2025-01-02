let cross = document.getElementById("cross-button");
let count = document.getElementById("cart-count");

let storedCount = localStorage.getItem("cart-count");

if(storedCount){
    count.innerText = storedCount;
}else{
    count.innerText = 0;
}

document.querySelectorAll(".cart-item-remove").forEach(button => {
    button.addEventListener("click", function () {
        if(count.innerText >0){
            count.innerText--;
        }
    });
});


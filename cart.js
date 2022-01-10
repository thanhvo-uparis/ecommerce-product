let itemQty = 0;

const qty = document.querySelector(".qty");

const qtyPlus = document.querySelector(".plus");
const qtyMinus = document.querySelector(".minus");

qtyPlus.addEventListener("click", () => {
  itemQty++;
  qty.textContent = itemQty;
});

qtyMinus.addEventListener("click", () => {
  if (itemQty > 0) {
    itemQty--;
    qty.textContent = itemQty;
  }
});


// open Cart
const cart = document.querySelector(".cart");
const avatar = document.querySelector(".navbar_profil");
const cartSvg = document.querySelector(".navbar_cart");

const handleOpenCart = () => {
  if (cart.style.visibility !== "visible") {
    cart.style.visibility = "visible";
    avatar.style.outline = "2px solid hsl(26, 100%, 55%)";
  } else {
    cart.style.visibility = "hidden";
    avatar.style.outline = "none";
  }
};

avatar.addEventListener("click", handleOpenCart);
cartSvg.addEventListener("click", handleOpenCart);

// add product to cart
const itemCounter = document.querySelector(".item-counter");
const addToCartBtn = document.querySelector(".right-bottom-btn");
const basketContent = document.querySelector(".cart_content");

addToCartBtn.addEventListener("click", () => {
  if (itemQty > 0) {
    // reset the cart
    basketContent.innerHTML = ``;
    // create the template
    const cartItemTemplate = `
              <div class="cart_content-image">
                    <img src="./images/image-product-1.jpg" alt="">
               </div>
              <div class="cart_content-description">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x ${itemQty} ${(itemQty * 125).toFixed(2)}</p>
              </div>
              <div class="cart_content-delete">
                   <img src="./images/icon-delete.svg" alt="">
              </div>
              `;
    const template = document.createElement("div");
    const btn = document.createElement("div");
    btn.classList.add("right-bottom-btn");
    btn.textContent = "Checkout";
    btn.style.marginTop = "10px";
    template.cloneNode(false);
    template.classList.add("cart-item");
    template.innerHTML = cartItemTemplate;
    // Append template
    basketContent.append(template);
    basketContent.append(btn);

    itemCounter.textContent = itemQty;

    cart.style.visibility = "visible";
    avatar.style.outline = "2px solid hsl(26, 100%, 55%)";
  }

  if (itemQty === 0) {
    itemCounter.textContent = null;
    basketContent.innerHTML = emptyCartTemplate;
  }
});

const emptyCartTemplate = `<p class="empty-cart-txt">Your cart is empty.</p>`;

//set
setInterval(() => {
  let removeItemBtn = document.querySelectorAll(".cart_content-delete");
  removeItemBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      itemCounter.textContent = null;
      itemQty = 0;
      qty.textContent = 0;
      if (itemQty === 0) {
        basketContent.innerHTML = emptyCartTemplate;
      }
    })
  );
}, 1000);
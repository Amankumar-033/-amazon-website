import {cart,removeElementFromCart,updateCheckout} from '../data/cart.js';
import {products} from '../data/products.js';


let cartSummaryHTML = '';
cart.forEach((cartItem) => {

    const productid = cartItem.productId;

    let matching;
    products.forEach((productItem) => {
        if(productid === productItem.id)
            matching = productItem;
    });


    cartSummaryHTML += `
     <div class="cart-item-container cartid-${matching.id}">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matching.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matching.name}
                </div>
                <div class="product-price">
                  $${(matching.priceCents*0.01).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary 
                  js-delete-link" data-product-id="
                  ${matching.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name=${matching.id}>
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name=${matching.id}>
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name=${matching.id}>
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
});


document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;


document.querySelectorAll(".js-delete-link").forEach((dellink) => {
    dellink.addEventListener("click" , () => {
        const productid = dellink.dataset.productId.trim();
        removeElementFromCart(productid);
        
        const container = document.querySelector(`.cartid-${productid}`);
        container.remove();
        document.querySelector(".js-return-to-home-link").innerHTML = `${updateCheckout()} items`;

    });
});

document.querySelector(".js-return-to-home-link").innerHTML = `${updateCheckout()} items`;





import {calculateCartQuantity, cart,cartQuantity,removeElementFromCart,} from '../data/cart.js';
import {products} from '../data/products.js';


window.onload = updateCheckoutQuantity;

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
                    Quantity: <span class="quantity-label js-quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link" data-product-id="${matching.id}">
                    Update
                  </span>
                  <input class="quantity-input display_none">
                  <span class="js-save-btn save-quantity-link link-primary display_none" data-product-id="${matching.id}">Save</span>
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
        updateCheckoutQuantity(); 
    });
});



function updateCheckoutQuantity(){
  document.querySelector(".js-return-to-home-link").innerHTML = `${cartQuantity} items`; 
}


document.querySelectorAll(".js-update-link").forEach((updatelink) => {
      updatelink.addEventListener("click", () => {
        let productID = updatelink.dataset.productId;
        
        const container = document.querySelector(`.cartid-${productID}`);
        const quantityInput = container.querySelector('.quantity-input');
        const saveLink = container.querySelector('.save-quantity-link');
        
        quantityInput.classList.add('display_initial');
        saveLink.classList.add('display_initial');
    
        updatelink.classList.add('display_none');
      });
  });


  document.querySelectorAll(".js-save-btn").forEach((savebutton) => {
    savebutton.addEventListener("click",()=>{
        const productID = savebutton.dataset.productId;
        
        const container = document.querySelector(`.cartid-${productID}`);
        const inputElement = container.querySelector(".quantity-input"); 
        const newInputQuantity = Number(inputElement.value);
        const updateElement = container.querySelector(".js-update-link");
      
        savebutton.classList.remove('display_initial');
        inputElement.classList.remove('display_initial');
        updateElement.classList.remove('display_none');

        updateCart(productID,newInputQuantity);
        inputElement.value = '';
    });
  });


  function updateCart(productID,newInputQuantity){
    let matching;
    cart.forEach((item) => {
        if(item.productId === productID)
          matching = item;
    });

    matching.quantity = newInputQuantity;

    const container = document.querySelector(`.cartid-${productID}`);
    const cartqnt = container.querySelector(".js-quantity-label");
    cartqnt.innerHTML = newInputQuantity;

    calculateCartQuantity();
    updateCheckoutQuantity();
  }

  
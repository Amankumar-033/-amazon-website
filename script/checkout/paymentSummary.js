import {cart} from '../../data/cart.js';
import { getProduct} from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOption.js';
import { cartQuantity } from '../../data/cart.js';

function formatCurrency(cents){
    return (Math.round(cents)*0.01).toFixed(2);
}

export function renderPaymentSummary(){
    let priceCents = 0;
    let shippingCents = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);

        priceCents += cartItem.quantity*product.priceCents;

        const deliveryoption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingCents += deliveryoption.priceCents;
    });

    let totalCentsBeforeTax = priceCents + shippingCents;
    const taxCents = totalCentsBeforeTax*0.01; 
    const totalCentsAfterTax = totalCentsBeforeTax + taxCents; 

    const paymentSummaryHTML = 
    `
       <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(priceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCentsBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCentsAfterTax)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `;

    document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
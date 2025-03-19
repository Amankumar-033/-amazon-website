import { loadProductsGrid } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

loadProductsGrid(()=>{
    renderOrderSummary();
    renderPaymentSummary();     
})



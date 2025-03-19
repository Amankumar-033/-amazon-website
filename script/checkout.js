import { loadProductsGrid } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";





new Promise((resolve)=>{
    loadProductsGrid(()=>{
        resolve();
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});



/*
Nested promise one at a time..
new Promise((resolve)=>{
    loadProductsGrid(()=>{
        resolve();
    });
}).then(()=>{
   return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
   });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
Run simultaneously and then wait for all to complete
Promise.all([
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    }),

    new Promise((resolve)=>{
        loadSomething(()=>{
            resolve();
        ]});
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/


/*
Callback method avouid in large projects...
loadProductsGrid(()=>{
    renderOrderSummary();
    renderPaymentSummary();     
})
*/


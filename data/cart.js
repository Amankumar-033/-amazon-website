export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId: '1',
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryOptionId: '2',
  }]; 


function saveTolocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
  localStorage.setItem('cartQuantity',JSON.stringify(cartQuantity));
}



export let cartQuantity = JSON.parse(localStorage.getItem('cartQuantity')) || 0;
export function addToCart(productid){
      let matched = null;
      cart.forEach((product)=>{
            if(product.productId === productid)
                matched = product;
      });

      if(matched){
        matched.quantity += 1;
      }
      else{
        cart.push({
            productId : productid,
            quantity: 1,
            deliveryOptionId: '1',
        });
    }

     cartQuantity += 1;
     saveTolocalStorage();
}


export function calculateCartQuantity(){
  let qnt = 0;
  cart.forEach((item)=>{
    qnt += item.quantity;
  });

  cartQuantity = qnt;
  saveTolocalStorage();
}



export function removeElementFromCart(productid){
  const newcart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productid)
      newcart.push(cartItem);
  });

  cart = newcart;
  calculateCartQuantity();
}



export function updateDeliveryOptionId(productID,deliveryOptionId){
  let matched = null;
  cart.forEach((product)=>{
        if(product.productId === productID)
            matched = product;
  });
  
  matched.deliveryOptionId = deliveryOptionId;
  saveTolocalStorage();
}
export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2,
},{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1,
}];


function saveTolocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

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
        });
    }

    saveTolocalStorage();
}


export function removeElementFromCart(productid){
  const newcart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productid)
      newcart.push(cartItem);
  });

  cart = newcart;

  saveTolocalStorage();
}




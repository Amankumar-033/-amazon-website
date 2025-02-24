export const cart = [{
  productid:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2,
},{
  productid:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1,
}];



export function addToCart(productid){
    let matched = null;
      cart.forEach((product)=>{
            if(product.productid === productid)
                matched = product;
      });

      if(matched){
        matched.quantity += 1;
      }
      else{
        cart.push({
            productid : productid,
            quantity: 1,
        });
    }
}




export function updateCartQuantity(){
    cartQuantity += 1;
    document.querySelector(".js-cart-Quantity").innerHTML = cartQuantity;
} 
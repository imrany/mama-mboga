import { ordersArray } from "./order"

let orders=[];
const showCart=(element,index,items)=>{
    element.addEventListener("click",()=>{
        items.map((i,n)=>{
            if(n===index){
                document.querySelector(".cart").style.display="block"
                document.querySelector(".cart").innerHTML=`
                <div class="cart-item">
                    <div class="header">
                        <p class="cart-header">Add to Cart</p>
                        <i class="fa fa-close close-cart" style="font-size:30px; margin-top:-1px; cursor:pointer;"></i>
                    </div>
                    <img src="${i.image_url}" class="image" alt="image"/><br/>
                    <p style="font-size:25px;">${i.product_name} @ Ksh ${i.price}.00</p><br/>
                    <button class="add" style="display:flex;">
                        <i class="material-icons" style="font-size:18px; margin-right:5px;">shopping_cart</i> <span>  Add to cart</span>
                    </button>
                </div>
                `
                orders=i
            }
        })
        closeCart(document.querySelector(".close-cart"))
        ordersArray(document.querySelector(".add"),orders)
    })
}

const closeCart=(element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".cart").style.display="none"
    })
}

export {
    showCart,
}
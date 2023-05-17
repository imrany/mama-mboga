const showCart=(element,items)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".cart").innerHTML=`
        <div class="item">
           <div>
            <p style="font-size:40px; font-weight:600; margin-bottom:-20px;">Add to Cart</p>
            <i class="fa fa-close close-cart" style="cursor:pointer; font-size:30px; float:right; margin:-40px 30px 0 0 ;"></i>
           </div>
            <img src="${items.image_url}" class="image" alt="image"/>
            <p style="font-size:20px;">Selling ${items.product_name} @ Ksh ${items.price}.00</p>
            <div class="card">
            <button>Purchase item</button>
            </div>
        </div>
        `
        closeCart(document.querySelector(".close-cart"))
        console.log(items)
    })
}

const closeCart=(element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".cart").innerHTML=""
    })
}

export {
    showCart,
}
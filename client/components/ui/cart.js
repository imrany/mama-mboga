const showCart=(element,index,items)=>{
    element.addEventListener("click",()=>{
        items.map((i,n)=>{
            if(n===index){
                document.querySelector(".cart").innerHTML=`
                <div class="item">
                    <div>
                        <p class="cart-header">Add to Cart</p>
                        <i class="fa fa-close close-cart"></i>
                    </div>
                        <img src="${i.image_url}" class="image" alt="image"/>
                        <p style="font-size:20px;">Selling ${i.product_name} @ Ksh ${i.price}.00</p>
                        <div class="card">
                        <button>Purchase item</button>
                    </div>
                </div>
                `
            }
        })
        closeCart(document.querySelector(".close-cart"))
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
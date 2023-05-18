const showPaymentModal=(element,items)=>{
    element.addEventListener("click",()=>{
        items.map((i,n)=>{
            if(n===index){
                document.querySelector(".cart").innerHTML=`
                <div class="item">
                    <div>
                        <p class="cart-header">Add to Cart</p>
                        <i class="fa fa-close close-payment"></i>
                    </div>
                        <img src="${i.image_url}" class="image" alt="image"/>
                        <p style="font-size:20px;">Selling ${i.product_name} @ Ksh ${i.price}.00</p>
                        <div class="card">
                        <button class="mpesa">Place payment</button>
                    </div>
                </div>
                `
                orders=i
            }
        })
        closePaymentModal(document.querySelector(".close-payment"))
    })
}

const closePaymentModal=(element)=>{
    element.addEventListener("click",()=>{

    })
}

export{
    showPaymentModal,
    closePaymentModal,
}
const showPaymentModal=(element,items,index)=>{
    element.addEventListener("click",()=>{
        items.map((i,n)=>{
            // const index=
            if(n===index){
                document.querySelector(".payment").innerHTML=`
                <div class="item">
                    <div>
                        <p class="cart-header">Payment</p>
                        <i class="fa fa-close close-payment"></i>
                    </div>
                        <img src="${i.image_url}" class="image" alt="image"/>
                        <p style="font-size:20px;">Selling ${i.product_name} @ Ksh ${i.price}.00</p>
                        <div class="card">
                        <button class="mpesa" style="background:green; color:white;">Pay via mpesa</button>
                    </div>
                </div>
                `
            }
            document.querySelectorAll(".close-payment").forEach(element=>{
                closePaymentModal(element)
            })
        })
    })
}

const closePaymentModal=(element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".payment").innerHTML=""
    })
}

export{
    showPaymentModal,
    closePaymentModal,
}
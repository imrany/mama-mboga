import { preloader } from "../preloader"
import { OrderContent } from "./order"

const showPaymentModal=(element,items,index)=>{
    element.addEventListener("click",()=>{
        items.map((i,n)=>{
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

const viewPaymentFromNavBar={
    open:(element)=>{
        element.addEventListener("click",()=>{
            const con=window.confirm(`Navigate to Orders to pay for your orders! \n Would you like to view your orders and pay?`)
            if(con){
                preloader()
                OrderContent()
            }
        })
    }
}
export{
    showPaymentModal,
    closePaymentModal,
    viewPaymentFromNavBar,
}
import { mpesaPayment } from "../mpesa"
import { preloader } from "../preloader"
import { OrderContent } from "./order"

const showPaymentModal=(element,items,index)=>{
    element.addEventListener("click",()=>{
        items.map((i,n)=>{
            if(n===index){
                document.querySelector(".payment").style.display="block"
                document.querySelector(".payment").innerHTML=`
                <div class="cart-item">
                    <div class="header">
                        <p class="cart-header">Payment</p>
                        <i class="fa fa-close close-payment" style="font-size:30px; margin-top:3px; cursor:pointer;"></i>
                    </div>
                        <img src="${i.image_url}" class="image" alt="image"/><br/>
                        <p style="font-size:25px;">${i.product_name} @ Ksh ${i.price}.00</p><br/>
                        <button class="mpesa" style="display:flex;">
                            <i class="material-icons" style="font-size:18px; margin-right:5px;">payment</i> 
                            <span>  Pay via mpesa</span>
                        </button>
                </div>
                `
            }
            document.querySelectorAll(".close-payment").forEach(element=>{
                closePaymentModal(element)
            })
            document.querySelectorAll(".mpesa").forEach(element=>{
                if(i.payment===true){
                    mpesaPayment.error(element,i.id)
                }else if(i.payment===false){
                    mpesaPayment.success(element,i.id)
                }
            })
        })
    })
}

const closePaymentModal=(element)=>{
    element.addEventListener("click",()=>{
        document.querySelector(".payment").style.display="none"
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
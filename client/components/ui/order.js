import { db } from "../indexedDB"
import { preloader, preloaderOff } from "../preloader"
import { showPaymentModal } from "./payment"

const ordersArray=(element,orders)=>{
    element.addEventListener("click",()=>{
      const transaction=db.transaction("Orders","readwrite")
        const orderStore=transaction.objectStore("Orders")
        const add=orderStore.add(orders)
        add.onsuccess = (ev) => {
            alert('Item was successfully added');
            document.querySelector(".cart").innerHTML=""
        };
        add.onerror = (err) => {
            console.log('error in request to add');
        };
    })
}

let order_items
const viewOrder=(element)=>{
    element.addEventListener("click",()=>{
        preloader()
        const transaction=db.transaction("Orders","readwrite")
        const orderStore=transaction.objectStore("Orders")
        const getItems=orderStore.getAll()
        getItems.onsuccess = (ev) => {
            document.getElementById("app").innerHTML=`
            <div>
                <h2>Orders</h2>
                <div class="order-list">
                </div>
                <div class="payment"></div>
                <a href="/index.html" class="card">
                    <button>Back Home</button>
                </a>
            </div>
            `
            order_items=getItems.result
            if(order_items.length===0){
                window.location.reload()
                // alert("No orders, placed yet!")
            }else{
                preloaderOff()
                order_items.forEach(i => {
                    let li=""
                    if(i.payment===false){
                        li=`
                        <div key=${i.id} class="order-item">
                            <div>
                                <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
                                <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
                                <p>Category  ${i.category}</p>
                                <p style="color:red;">Not paid</p>
                            </div>
                        </div>
                        `
                    }else{
                        li=`
                        <div key=${i.id} class="order-item">
                            <div>
                                <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
                                <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
                                <p>Category  ${i.category}</p>
                                <p style="color:green;">Paid</p>
                            </div>
                        </div>
                        `
                    }
                    document.querySelector(".order-list").innerHTML+=li
                    document.querySelectorAll(".order-item").forEach((element,index)=>{
                        showPaymentModal(element,order_items,index)
                    })
                });
            }
        };
        getItems.onerror = (err) => {
            console.log('error in request to add');
            window.location.reload()
        };
    })
}

export {
    ordersArray,
    viewOrder,
}
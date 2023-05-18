import { db } from "./indexedDB"
import { OrderContent } from "./ui/order"

const mpesaPayment={
    success:(element,id)=>{
        element.addEventListener("click",()=>{
            const transaction=db.transaction("Orders","readwrite")
            const orderStore=transaction.objectStore("Orders")
            const update=orderStore.get(id)
            update.onsuccess = (ev) => {
                update.result.payment = true;
                orderStore.put(update.result);
                document.querySelector("#app").innerHTML=`
                <div style="background:rgb(5, 92, 5); position:fixed; top:0; left:0; right:0; bottom:0; color:white; width:100vw; height:100vh;">
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh;">
                        <img src="/image/logo.png" class="image"/>
                        <h1>SUCCESS!</h1>
                        <h2>Transaction complete</h2>
                        <br/>
                        <a href="/index.html" style="padding:5px 40px; border:2px solid #f2f2f2; border-radius:20px; color:white;">
                            Back
                        </a>
                    </div>
                </div>
                `
                setTimeout(()=>{
                    window.location.reload()
                },3000)
            };
            update.onerror = (err) => {
                console.log('error in request to update');
                OrderContent()
            };
        })
    },

    error:(element)=>{
        element.addEventListener("click",()=>{
            document.querySelector("#app").innerHTML=`
            <div style="background:red; position:fixed; top:0; left:0; right:0; bottom:0; color:white; width:100vw; height:100vh;">
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh;">
                    <img src="/image/logo.png" class="image"/>
                    <h1>Error!</h1>
                    <h2>Transaction incomplete/ Item paid</h2>
                </div>
            </div>
            `
            setTimeout(()=>{
                OrderContent()
            },3000)
        })
    }
}

export{
    mpesaPayment
}
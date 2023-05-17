import { db } from "../indexedDB"

const ordersArray=(element,orders)=>{
    element.addEventListener("click",()=>{
      console.log(orders)
      const transaction=db.transaction("Orders","readwrite")
        const orderStore=transaction.objectStore("Orders")
        const add=orderStore.add(orders)
        add.onsuccess = (ev) => {
            console.log('successfully added an object');
        };
        add.onerror = (err) => {
            console.log('error in request to add');
        };
        alert("Item added")
    })
}


const viewOrder=(element)=>{
    let items=localStorage.getItem("orders")
    element.addEventListener("click",()=>{
        let li=`
        <h1>Oder1</h1>
        `
        document.getElementById("app").innerHTML=`
        <div>
            <h2>Orders</h2>
            <div class="order-list">
            </div>
        </div>
        `
        document.querySelector(".order-list").innerHTML+=li
    })
}

export {
    ordersArray,
    viewOrder,
}
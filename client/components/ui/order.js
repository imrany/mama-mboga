import { db } from "../indexedDB"

const ordersArray=(element,orders)=>{
    element.addEventListener("click",()=>{
      const transaction=db.transaction("Orders","readwrite")
        const orderStore=transaction.objectStore("Orders")
        const add=orderStore.add(orders)
        add.onsuccess = (ev) => {
            alert('Item was successfully added');
        };
        add.onerror = (err) => {
            console.log('error in request to add');
        };
    })
}


const viewOrder=(element)=>{
    let items=localStorage.getItem("orders")
    element.addEventListener("click",()=>{
        const transaction=db.transaction("Orders","readwrite")
        const orderStore=transaction.objectStore("Orders")
        const getItems=orderStore.getAll()
        getItems.onsuccess = (ev) => {
            console.log(getItems.result);
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
        };
        getItems.onerror = (err) => {
            console.log('error in request to add');
        };
        
    })
}

export {
    ordersArray,
    viewOrder,
}
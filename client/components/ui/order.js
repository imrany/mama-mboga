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
    element.addEventListener("click",()=>{
        const transaction=db.transaction("Orders","readwrite")
        const orderStore=transaction.objectStore("Orders")
        const getItems=orderStore.getAll()
        getItems.onsuccess = (ev) => {
            document.getElementById("app").innerHTML=`
            <div>
                <h2>Orders</h2>
                <div class="order-list">
                </div>
            </div>
            `
            console.log(getItems.result);
            const order_items=getItems.result
            order_items.forEach(i => {
                let li=`
                <div key=${i.id} class="products">
                    <div>
                        <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
                        <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
                        <p>Category  ${i.category}</p>
                    </div>
                </div>
                `
                document.querySelector(".order-list").innerHTML+=li
            });
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
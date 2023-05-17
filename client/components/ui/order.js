const ordersArray=(element,orders)=>{
    element.addEventListener("click",()=>{
        orders.map((i,n)=>{
            const data={
                image_url:i.image_url,
                category:i.category,
                product_name:i.product_name,
                price:i.price
            }
          localStorage.setItem(`order-${n}`,data)
        })
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
   console.log(...items.category)
}

export {
    ordersArray,
    viewOrder
}
const viewOrder=(element,orders)=>{
    localStorage.setItem("orders",orders)
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

const ordersArray=(viewOrderElement,element,orders)=>{
    element.addEventListener("click",()=>{
        alert("Item added")
        viewOrder(viewOrderElement,orders)
    })
}


export {
    ordersArray
}
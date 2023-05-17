const viewOrder=(element,orders)=>{
    console.log(orders)
    element.addEventListener("click",()=>{
        document.getElementById("app").innerHTML=`
        <div>
            <h2>Orders</h2>
            ${orders}
        </div>
        `
    })
}

const ordersArray=(element,orders)=>{
    element.addEventListener("click",()=>{
        alert("Item added")
        viewOrder(orders)
        console.log(orders)
    })
}


export {
    viewOrder,
    ordersArray
}
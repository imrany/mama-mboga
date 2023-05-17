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

const ordersArray=(viewOrderElement,element,orders)=>{
    element.addEventListener("click",()=>{
        alert("Item added")
        viewOrder(viewOrderElement,orders)
    })
}


export {
    ordersArray
}
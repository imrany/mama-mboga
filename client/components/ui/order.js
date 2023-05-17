const viewOrder=(element)=>{
    element.addEventListener("click",()=>{

    })
}

const ordersArray=(element,orders)=>{
    element.addEventListener("click",()=>{
        console.log(orders)
    })
}

export {
    viewOrder,
    ordersArray
}
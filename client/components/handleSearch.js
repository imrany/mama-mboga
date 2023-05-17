import { products } from "../data"
import { showCart } from "./ui/cart"
export const handleSearch=(element)=>{
    element.addEventListener("change",(e)=>{
        let result=[]
        document.querySelector(".products-window").innerHTML=""
        const val=`${e.target.value}`
        const value=val.slice(0,1).toUpperCase()
        products.map(i=>{
            if(i.category.includes(value)||i.product_name.includes(value)){
                result.push(i)
            }
        })
        result.forEach((i,n)=>{
            let li=`
            <div class="products">
              <div>
                <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
                <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
                <p>Category <span style="color:green;">${i.category}</span></p>
              </div>
            </div>
            `
            document.querySelector(".products-window").innerHTML+=li
        })

        document.querySelectorAll(".products").forEach((element,index)=>{
          showCart(element,index,result)
        })
    })
}
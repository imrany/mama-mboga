import { products } from "../data"
import { showCart } from "./ui/cart"
export const handleSearch=(element)=>{
    element.addEventListener("change",(e)=>{
        let result=[]
        document.querySelector(".cat-items").innerHTML=""
        const val=`${e.target.value}`
        const value=val.slice(0,1).toUpperCase()
        products.map(i=>{
            if(i.category.includes(value)||i.product_name.includes(value)){
                result.push(i)
            }
        })
        result.forEach((i,n)=>{
            let li=`
            <div class="item">
              <div>
                <img src="${i.image_url}" alt="${i.product_name}"/>
                <p>${i.product_name} @ ksh${i.price}.00</p>
                <p>Category <span style="color:green;">${i.category}</span></p>
                <button class="shop">
                  Shop Now
                </button>
              </div>
            </div>
            `
            document.querySelector(".cat-items").innerHTML+=li
        })

        document.querySelectorAll(".shop").forEach((element,index)=>{
          showCart(element,index,result)
        })

        document.querySelector(".cat-items").scrollIntoView()
    })
}

export const handleSelect=(element)=>{
  element.addEventListener("change",(e)=>{
    let result=[]
    document.querySelector(".cat-items").innerHTML=""
    const value=`${e.target.value}`
    if(value==="Fruits"){
      document.querySelector(".head").innerHTML=`
      <h1>Categorized as <span style="color:red;">${value}</span></h1>
      `
    }else if(value==="Vegetables"){
      document.querySelector(".head").innerHTML=`
      <h1>Categorized as <span style="color:green;">${value}</span></h1>
      `
    }
    products.map(i=>{
        if(i.category.includes(value)||i.product_name.includes(value)){
            result.push(i)
        }
    })
    result.forEach((i,n)=>{
        let li=`
        <div class="item">
          <div>
            <img src="${i.image_url}" alt="${i.product_name}"/>
            <p>${i.product_name} @ ksh${i.price}.00</p>
            <p>Category <span style="color:green;">${i.category}</span></p>
            <button class="shop">
              Shop Now
            </button>
          </div>
        </div>
        `
        document.querySelector(".cat-items").innerHTML+=li
    })

    document.querySelectorAll(".shop").forEach((element,index)=>{
      showCart(element,index,result)
    })
  })
}
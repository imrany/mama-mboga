const products=[
    {
      category:"Greens",
      product_name:"Sukuma wiki",
      price:20
    },
    {
      category:"Greens",
      product_name:"Spinach",
      price:30
    },
    {
      category:"Greens",
      product_name:"Cabbage",
      price:20
    },
    {
      category:"Legumes",
      product_name:"Beans",
      price:60
    },
    {
      category:"Legumes",
      product_name:"Peas",
      price:30
    },
    {
      category:"Beverage",
      product_name:"Coffee",
      price:40
    }
]
  
export const handleSearch=(element)=>{
    element.addEventListener("change",(e)=>{
        const value=e.target.value
        console.log(value)
    })
}
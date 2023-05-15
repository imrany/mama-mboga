import { products } from "../../data/products.js"

const getAllProducts=async(req,res)=>{
    try {
        res.send(products)
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export{
    getAllProducts
}
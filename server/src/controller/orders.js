export const createOrder=async(req,res)=>{
    try {
        const {id, category, product, price}=req.body
        res.status(201).send({msg:"Order created sucessfully"})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export const pay_of_order=async(req,res)=>{
    try {
        const {id, price, phone_number}=req.body
        res.status(201).send({msg:"Product paid sucessfully"})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

export const checkOrder=async(req,res)=>{
    try {
        const {id} = req.params
        res.status(201).send({msg:"Product not available"})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}


const register=async(req,res)=>{
    try {
        const {id, username, password, phone_number}=req.body;
       res.status(201).send({msg:"Registered sucessfully"})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

const login=async(req,res)=>{
    try {
        const {phone_number, password}=req.body;
        res.status(201).send({msg:`Login Successfully`})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}
export{
    register,
    login
}
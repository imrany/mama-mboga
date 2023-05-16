export const handleSubmit=(element)=>{
    element.addEventListener("submit",async(e)=>{
        try {
            const url=``
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({

                })
            })
        } catch (error) {
            console.log(error.message)
        }
    })
}
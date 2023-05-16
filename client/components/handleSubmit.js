const handleLoginSubmit=(element)=>{
    element.addEventListener("submit",async(e)=>{
        e.preventDefault()
        try {
            const phone_number=e.target.phone.value
            const password=e.target.password.value
            const url=`http://localhost:3000/api/auth/login`
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    phone_number,
                    password
                })
            })
            const parseRes=await response.json()
            console.log(parseRes)
        } catch (error) {
            console.log(error.message)
        }
    })
}

const handleCreateAccount=(element)=>{
    element.addEventListener("submit",async(e)=>{
        e.preventDefault()
        try {
            const phone_number=e.target.phone.value
            const password=e.target.password.value
            const confirm_password=e.target.confirm_password.value
            const username=e.target.username.value
            if(password===confirm_password){
                const url=`http://localhost:3000/api/auth/create_account`
                const response=await fetch(url,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        phone_number,
                        confirm_password,
                        username
                    })
                })
                const parseRes=await response.json()
                console.log(parseRes)
            }else{
                alert("Passwords doesn't match")
            }
        } catch (error) {
            console.log(error.message)
        }
    })
}

export {
    handleLoginSubmit,
    handleCreateAccount,
}
const handleLoginSubmit=(element)=>{
    element.addEventListener("submit",async(e)=>{
        e.preventDefault()
        try {
            // const phone_number=e.target.phone.value
            // const password=e.target.password.value
            // const url=`http://localhost:3000/api/auth/login`
            // const response=await fetch(url,{
            //     method:"POST",
            //     headers:{
            //         "content-type":"application/json"
            //     },
            //     body:JSON.stringify({
            //         phone_number,
            //         password
            //     })
            // })
            // const parseRes=await responspurplee.json()
            // console.log(parseRes)
            document.querySelector("#auth").innerHTML=`
               <div style="background:rgb(5, 92, 5); position:fixed; top:0; left:0; right:0; bottom:0; color:white; width:100vw; height:100vh;">
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh;">
                    <img src="/image/logo.png" class="image"/>
                    <h1>SUCCESS!</h1>
                    <h2>You have successfully login</h2>
                    <br/>
                    <a href="/index.html" style="padding:5px 40px; border:2px solid #f2f2f2; border-radius:20px; color:white;">
                        Back
                    </a>
                </div>
               </div>
            `
            setTimeout(()=>{
                window.location.href="/index.html"
            },3000)
        } catch (error) {
            console.log(error.message)
        }
    })
}

const handleCreateAccount=(element)=>{
    element.addEventListener("submit",async(e)=>{
        e.preventDefault()
        try {
            // const phone_number=e.target.phone.value
            // const password=e.target.password.value
            // const confirm_password=e.target.confirm_password.value
            // const username=e.target.username.value
            // if(password===confirm_password){
            //     const url=`http://localhost:3000/api/auth/create_account`
            //     const response=await fetch(url,{
            //         method:"POST",
            //         headers:{
            //             "content-type":"application/json"
            //         },
            //         body:JSON.stringify({
            //             phone_number,
            //             confirm_password,
            //             username
            //         })
            //     })
            //     const parseRes=await response.json()
            //     console.log(parseRes)
            // }else{
            //     alert("Passwords doesn't match")
            // }
            document.querySelector("#auth").innerHTML=`
               <div style="background:rgb(5, 92, 5); position:fixed; top:0; left:0; right:0; bottom:0; color:white; width:100vw; height:100vh;">
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh;">
                    <img src="/image/logo.png" class="image"/>
                    <h1>SUCCESS!</h1>
                    <h2>You have successfully create a new account</h2>
                    <br/>
                    <a href="/index.html" style="padding:5px 40px; border:2px solid #f2f2f2; border-radius:20px; color:white;">
                        Back
                    </a>
                </div>
               </div>
            `
            setTimeout(()=>{
                window.location.href="/index.html"
            },3000)
        } catch (error) {
            console.log(error.message)
        }
    })
}

export {
    handleLoginSubmit,
    handleCreateAccount,
}
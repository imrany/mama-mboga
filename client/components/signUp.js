import { handleCreateAccount } from "./handleSubmit"

const showSignupPage=(element)=>{
    element.addEventListener("click",()=>{
        document.getElementById("login").innerHTML=`
        <h2>Create new account</h1>    
        <form class="login-form" id="create-account">
            <label>Enter Username</label>
            <input type="text" name="username" placeholder="John Doe" required/>
            <label>Enter Phone number</label>
            <input type="phone" name="phone" placeholder="07xxxxxxxx" required/>
            <label>Enter Password</label>
            <input type="password" name="password" required/>
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" required/>
            <button>Create account</button>

            <a href="./auth.html" style="text-decoration:underline; color:inherit; margin:30px 0; cursor:pointer;">I have an account</a>
        </form>
        `
        handleCreateAccount(document.getElementById("create-account"))
    })
}

export{
    showSignupPage
}
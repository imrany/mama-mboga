import '../../styles/style.css'
import '../../styles/responsive.css'
import { showSignupPage } from '../signUp'
import { handleLoginSubmit } from '../handleSubmit'
import mamalogo from "/image/logo.png"

document.getElementById("auth").innerHTML=`
<div id="login">
    
</div>
`
document.getElementById("login").innerHTML=`
    <img src="${mamalogo}" class="image" alt="Mama mboga's logo"/>
    <h2>Login</h1>    
    <form class="login-form">
        <label>Enter Phone number</label>
        <input type="text" name="phone" placeholder="07xxxxxxxx" required/>
        <label>Enter Password</label>
        <input type="password" name="password" required/>
        <button type="submit">Login</button>

    </form>
    <p class="sign-up" style="margin:30px 0; text-decoration:underline; cursor:pointer;">Create a new account</p>
`
handleLoginSubmit(document.querySelector(".login-form"))
showSignupPage(document.querySelector(".sign-up"))
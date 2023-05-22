import '../../styles/style.css'
import '../../styles/responsive.css'
import { showSignupPage } from '../signUp'
import { handleLoginSubmit } from '../handleSubmit'
import mamalogo from "/image/logo.png"

document.getElementById("auth").innerHTML=`
<nav>
    <a href="/index.html">
      <img src="${mamalogo}" class="logo" alt="mama mboga's logo" />
    </a>
    <div style="display:flex;">
      <input class="search-input" name="Search" type="search" placeholder="Search for a product..."/>
    </div>
    <ul class="nav-links">
      <li>
        <a href="/index.html">
        <span class="material-icons">home_outline</span>
          Home
        </a>
      </li>
      <li class="view-order" style="cursor:pointer;">
        <p><span class="material-icons">shopping_cart_outline</span>
        My Cart</p>
      </li>
      <li class="view-payment" style="cursor:pointer;">
        <p><span class="material-icons">payment_outline</span>
        Payment</p>
      </li>
    </ul>
</nav>
<div id="login">
    
</div>
`
document.getElementById("login").innerHTML=`
    <h2>Login</h2>    
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
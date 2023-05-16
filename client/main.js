import './styles/style.css'
import './styles/responsive.css'
import mamaLogo from '/image/logo.png'

document.querySelector('#app').innerHTML = `
  <nav>
    <div>
      <img src="${mamaLogo}" class="logo" alt="mama mboga's logo" />
    </div>
    <ul class="nav-links">
      <li>
        <a href="./pages/auth.html">Login</a>
      </li>
      <li>
        <a href="./pages/order.html">Order</a>
      </li>
      <li>
        <a href="./pages/category.html">Categories</a>
      </li>
      <li>
        <a href="./pages/payment.html">Payment</a>
      </li>
    </ul>
  </nav>
  <div>

  <div style="display:flex;">
    <input class="search-input" type="search" placeholder="Search for a product..."/>
    <i class="fa fa-lock" style="font-size:40px; margin:0 20px;"></i>
  </div>
    <h2>Welcome to Mama mboga!</h2>
  </div>
`
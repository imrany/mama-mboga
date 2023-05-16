import './styles/style.css'
import './styles/responsive.css'
import mamaLogo from '/image/logo.png'
import { handleSearch } from './components/handleSearch'
import { products } from './data'

window.scrollTo(0,0)
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
    <input class="search-input" name="Search" type="search" placeholder="Search for a product..."/>
    <i class="fa fa-lock" style="font-size:40px; margin:0 20px;"></i>
  </div>
    <h2>Welcome to Mama mboga!</h2>

    <div class="products-window">
    </div>
  </div>
`

products.forEach((i,n)=>{
  let li=`
  <div class="products">
    <a href="${n}" style="color:inherit;">
      <div>
        <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
        <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
        <p>Category <span style="color:green;">${i.category}</span></p>
      </div>
    </a>
  </div>
  `
  document.querySelector(".products-window").innerHTML+=li
})

handleSearch(document.querySelector(".search-input"))
import './styles/style.css'
import './styles/responsive.css'
import mamaLogo from '/image/logo.png'
import { handleSearch, handleSelect } from './components/handleSearch'
import { products } from './data'
import { showCart } from './components/ui/cart'
import { OrderContent, viewOrder } from './components/ui/order'
import { viewPaymentFromNavBar } from './components/ui/payment'

import grapes from "/image/grapes.jpg"

window.scrollTo(0,0)
document.querySelector('#app').innerHTML = `
<div class="top">
  <marquee behavior="smooth" direction="left">GET AFFORDABLE GROCCERY AT KSH 200</marquee>
</div>
  <nav>
    <a href="/index.html">
      <img src="${mamaLogo}" class="logo" alt="mama mboga's logo" />
    </a>
    <div style="display:flex;">
      <input class="search-input" name="Search" type="search" placeholder="Search for a product..."/>
    </div>
    <ul class="nav-links">
      <li>
        <a href="./pages/auth.html">
        <span class="material-icons">person_outline</span>
          Login
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

  <div class="hero-section">
    <h2>Have Fresh Groceries Delivered</h2>
    <h2>To Your Home At Affordable Prices</h2><br/>
    <h3 style="color:red;">Fresh Wholesome Fruits & Vegetables</h2><br/>
    <p style="color:orange;">Fresh Farm Produce</p>
  </div>
    
  <div class="about-section">
    <div>
      <span class="material-icons" style="font-size:60px;">shopping_cart</span>
      <h3>Order</h3>
      <p>Order an item</p>
    </div>

    <div>
      <span class="material-icons" style="font-size:60px;">payment</span>
      <h3>Pay</h3>
      <p>Pay for the item</p>
    </div>

    <div>
      <span class="material-icons" style="font-size:60px;">local_shipping</span>
      <h3>Delivery</h3>
      <p>Same Day Delivery</p>
    </div>
  </div>

  
    <div class="cat-body"  id="category">
      <h1 class="head">Shop by Categories</h1>
        <div class="cat-section">
          <select class="select-category" name="category">
          <option>All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </div>

      <div class="cat-items"></div>
    </div>

    <div class="cart"></div>

  </div>

  <footer>
    <div>
      <h1>Quick Links</h1><br/><br/>
      <a href="/pages/auth.html">Login</a><br/><br/>
      <a href="#category">Categories</a><br/><br/>
      <div class="view-cat" style="cursor:pointer; font-weight:600;">My Cart</div>
    </div>
  </footer>
  <div class="copy-write">&copy; 2023</div>
  `

let cat=[]
let items=products
products.forEach((i,n)=>{
  let li=`
  <div class="item">
    <div>
      <img src="${i.image_url}" alt="${i.product_name}"/>
      <p>${i.product_name} @ ksh${i.price}.00</p>
      <p>Category  <span class="cat-${n}"></span></p>
      <button class="shop">
        Shop Now
      </button>
    </div>
  </div>
  `
  cat.push({index:n,cat:i.category})
  document.querySelector(".cat-items").innerHTML+=li
})

cat.forEach((item)=>{
  switch (item.cat) {
    case "Vegetables":
      document.querySelector(`.cat-${item.index}`).innerHTML=`
        <span style="color:green;">${item.cat}</span>
      `
      break;
    case "Fruits":
    document.querySelector(`.cat-${item.index}`).innerHTML=`
      <span style="color:red;">${item.cat}</span>
    `
    break;
    case "Legumes":
    document.querySelector(`.cat-${item.index}`).innerHTML=`
      <span style="color:brown;">${item.cat}</span>
    `
    break;
    case "Beverage":
    document.querySelector(`.cat-${item.index}`).innerHTML=`
      <span style="color:gray;">${item.cat}</span>
    `
    break;
    default:
      document.querySelector(`.cat-${item.index}`).innerHTML=`
      <span>${item.cat}</span>
    `
    break;
  }
})

document.querySelectorAll(".shop").forEach((element,index)=>{
  showCart(element,index,items)
})

viewOrder(document.querySelector(".view-order"))
handleSearch(document.querySelector(".search-input"))
viewPaymentFromNavBar.open(document.querySelector(".view-payment"))
handleSelect(document.querySelector(".select-category"))
viewOrder(document.querySelector(".view-cat"))
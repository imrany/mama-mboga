import './styles/style.css'
import './styles/responsive.css'
import mamaLogo from '/image/logo.png'
import { handleSearch } from './components/handleSearch'
import { products } from './data'
import { showCart } from './components/ui/cart'
import { viewOrder } from './components/ui/order'
import { viewPaymentFromNavBar } from './components/ui/payment'

window.scrollTo(0,0)
document.querySelector('#app').innerHTML = `
<div class="top"></div>
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
        Orders</p>
      </li>
      <li class="view-payment" style="cursor:pointer;">
        <p><span class="material-icons">payment_outline</span>
        Payment</p>
      </li>
    </ul>
  </nav>
  
    <h2>Welcome to Mama's market!</h2>

    <div class="products-window">
    </div>
  </div>

  <div class="cart">
   
  </div>
`
let cat=[]
let items=products
products.forEach((i,n)=>{
  let li=`
  <div class="products">
    <div>
      <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
      <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
      <p>Category  <span class="cat-${n}"></span></p>
    </div>
  </div>
  `
  cat.push({index:n,cat:i.category})
  document.querySelector(".products-window").innerHTML+=li
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

document.querySelectorAll(".products").forEach((element,index)=>{
  showCart(element,index,items)
})

viewOrder(document.querySelector(".view-order"))
handleSearch(document.querySelector(".search-input"))
viewPaymentFromNavBar.open(document.querySelector(".view-payment"))
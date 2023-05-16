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
let cat=[]
products.forEach((i,n)=>{
  let li=`
  <div class="products">
    <a href="${n}" style="color:inherit;">
      <div>
        <img class="image" src="${i.image_url}" alt="${i.product_name}"/>
        <p>Selling ${i.product_name} @ ksh${i.price}.00</p>
        <p>Category  <span class="cat-${n}"></span></p>
      </div>
    </a>
  </div>
  `
  cat.push({index:n,cat:i.category})
  document.querySelector(".products-window").innerHTML+=li
})

cat.forEach((item)=>{
  switch (item.cat) {
    case "Greens":
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
handleSearch(document.querySelector(".search-input"))
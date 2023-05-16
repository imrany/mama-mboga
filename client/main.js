import './styles/style.css'
import './styles/responsive.css'
import mamaLogo from '/image/logo.png'
import cabbage from '/image/cabbage.png'
import { handleSearch } from './components/handleSearch'

const products=[
  {
    category:"Greens",
    product_name:"Sukuma wiki",
    price:20
  },
  {
    category:"Greens",
    product_name:"Spinach",
    price:30
  },
  {
    category:"Greens",
    product_name:"Cabbage",
    price:20
  },
  {
    category:"Legumes",
    product_name:"Beans",
    price:60
  },
  {
    category:"Legumes",
    product_name:"Peas",
    price:30
  },
  {
    category:"Beverage",
    product_name:"Coffee",
    price:40
  }
]

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

document.querySelector(".products-window").innerHTML=`
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>

<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
<div class="products">
  <div>
    <img class="image" src="${cabbage}" alt="cabbage"/>
    <p>Selling Cabbage @ ksh20.00</p>
    <p>Category <span style="color:green;">Greens</span></p>
  </div>
</div>
`
handleSearch(document.querySelector(".search-input"))
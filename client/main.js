import './style.css'
import mamaLogo from '/image/logo.png'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${mamaLogo}" class="logo" alt="Vite logo" />
    <h1>Mama mboga!</h1>
    <a href="./pages/auth.html" id="counter" type="button">Login</a>
  </div>
`
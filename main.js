import './style.css'
import { printViewport } from './printViewport.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="viewport"></h1>
  </div>
`


window.addEventListener("resize", printViewport);
printViewport()


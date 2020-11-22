const navbarCart = document.getElementById("cart");
const h1count = document.getElementById("count");
const itemContainer = document.querySelector(".container");
const h2total = document.getElementById("t-price");
const checkoutBtn = document.getElementById("checkout");
const clearBtn = document.getElementById("clear")

if (localStorage.getItem('cart') == null || localStorage.getItem('cart') === '') {
    localStorage.setItem('cart', '[]')
}
let cart = JSON.parse(localStorage.getItem('cart'))

navbarCart.innerText = `🛒 [${cart.length}]`

h1count.innerText = `Co ${cart.length} san pham trong gio hang`

h2total.innerText 

let total = 0

for (const product of cart) {
    let itemDiv = document.createElement('div')
    itemDiv.classList.add('product')
    let img = document.createElement('img')
    img.src = product.img
    itemDiv.appendChild(img)
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('info')
    let h3 = document.createElement('h3')
    h3.innerText = product.name
    let p = document.createElement('p')
    p.innerText = `${product.price.toLocaleString()} d`
    infoDiv.appendChild(h3)
    infoDiv.appendChild(p)
    itemDiv.appendChild(infoDiv)
    itemContainer.appendChild(itemDiv)
    total += product.price
}

clearBtn.onclick = removeCart

h2total.innerText = `Tong ${total.toLocaleString()} d`
function removeCart() {
    localStorage.setItem('cart', '[]') 
    location.reload()
}







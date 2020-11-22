const products = [
    {
        name: "iPhone 12 Pro Max 128GB",
        img: "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-195420-015420-400x400.jpg",
        price: 33990000,
        colors: ['red', 'gold', 'grey']
    },
    {
        name: "Samsung Galaxy Note 10+",
        img: "https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-den-400x460-400x460.png",
        price: 16490000,
        colors: ['silver', 'black']
    },
    {
        name: "iPhone 11 Pro Max 64GB",
        img: "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png",
        price: 30990000,
        colors: ['darkgreen', 'gold', 'grey', 'silver']
    },
    {
        name: "Vsmart Aris",
        img: "https://cdn.tgdd.vn/Products/Images/42/228530/vsmart-aris-181920-121945-400x460.png",
        price: 5900000,
        colors: ['green', 'darkgrey']
    },
    {
        name: "OPPO Reno3 Pro",
        img: "https://cdn.tgdd.vn/Products/Images/42/216172/oppo-reno3-pro-den-400x460-400x460.png",
        price: 8990000,
        colors: ['black', 'white']
    },
    {
        name: "Xiaomi Redmi Note 9",
        img: "https://cdn.tgdd.vn/Products/Images/42/214925/xiaomi-redmi-note-9-black-460-400x460.png",
        price: 4790000,
        colors: ['green', 'black', 'white', 'darkgrey']
    }
]

let container = document.querySelector('.container')
let navbarCart = document.querySelector('#cart')
products.forEach(function(p) {
    let productDiv = document.createElement('div')
    productDiv.classList.add('product')
    let img = document.createElement('img')
    img.src = p.img
    let name = document.createElement('h4')
    name.innerText = p.name
    let price = document.createElement('p')
    price.innerText = `${p.price.toLocaleString()} đ`
    let cartBtn = document.createElement('button')
    cartBtn.innerText = 'Thêm vào giỏ'
    cartBtn.onclick = function() {
        addToCart(p)
    }
    productDiv.appendChild(img)
    productDiv.appendChild(name)
    productDiv.appendChild(price)
    productDiv.appendChild(cartBtn)
    container.appendChild(productDiv)
})

function addToCart(product) {
    // if cart not exists, insert an empty array
    if (localStorage.getItem('cart') == null || localStorage.getItem('cart') === '') {
        localStorage.setItem('cart', '[]')
    }
    let cart = JSON.parse(localStorage.getItem('cart'))
    // if product is already in cart, then stop
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name.toLowerCase() === product.name.toLowerCase()) {
            alert('Sản phẩm đã có trong giỏ hàng')
            return
        }
    }
    cart.push(product)
    // update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`Đã thêm ${product.name} vào giỏ thành công`)
    navbarCart.innerText = `🛒 (${cart.length})`
}
const quantityControlInc = document.querySelectorAll('.product__quantity-control_inc')
const quantityControlDec = document.querySelectorAll('.product__quantity-control_dec')
const cartProducts = document.querySelector('.cart__products')
const addToCartBtns = document.querySelectorAll('.product__add')

function updQuantity(event) {
  let target = event.currentTarget
  let quantity
  if (target.classList.contains('product__quantity-control_inc')){
    quantity = target.previousElementSibling
    quantity.textContent++
  } else if (target.classList.contains('product__quantity-control_dec')) {
      quantity = target.nextElementSibling
      quantity.textContent = quantity.textContent == 1 ? 1 : quantity.textContent - 1
  }
}

function addProducts(event) {
  let target = event.currentTarget
  let cartProductsList = Array.from(document.querySelectorAll('.cart__product'))
  let quantity = Number(target.previousElementSibling.children[1].textContent)
  let id = target.closest('.product').getAttribute('data-id')
  let imgSrc = target.closest('.product').children[1].getAttribute('src')
  let cartProduct = document.createElement('div')
  cartProduct.classList.add('cart__product')
  cartProduct.setAttribute('data-id', id)
  cartProduct.innerHTML = `
      <img class="cart__product-image" src="${imgSrc}">
      <div class="cart__product-count">${quantity}</div>
      `
  let productInCart = cartProductsList.find(element => element.getAttribute('data-id') == id)
  if (productInCart) {
    productInCart.children[1].textContent = Number(productInCart.children[1].textContent) + quantity
  } else {
    cartProducts.append(cartProduct)  
  }
}

for (let i = 0; i < quantityControlInc.length; i++) {
  quantityControlInc[i].addEventListener('click', updQuantity)
  quantityControlDec[i].addEventListener('click', updQuantity)
}

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', addProducts)
}

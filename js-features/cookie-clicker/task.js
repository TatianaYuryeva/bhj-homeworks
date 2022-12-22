const cookie = document.getElementById('cookie')
const clickCounter = document.getElementById('clicker__counter')
const clickSpeed = document.getElementById('clicker__speed')
let counter = 0
let initialTime = new Date()

cookie.onclick = () => {
    counter++
    let clickTime = new Date()
    let gameTime = (clickTime - initialTime) / 1000
    let speed = (counter / gameTime).toFixed(2)
    clickCounter.textContent = counter
    clickSpeed.textContent = speed
    if (counter % 2 != 0) {
        cookie.width += 20
        cookie.height += 20
    } else {
        cookie.width -= 20
        cookie.height -= 20
    }
}
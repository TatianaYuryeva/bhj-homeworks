const numberOfHoles = document.getElementsByClassName('hole').length
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

getHole = index => document.getElementById(`hole${index}`)

function gameOver(message, deadMole, lostMole) {
  alert(message)
  dead.textContent = deadMole
  lost.textContent = lostMole
}

for (let i = 1; i <= numberOfHoles; i++) {
  let hole = getHole(i)
  hole.onclick  = () => {
    if (dead.textContent == 9) {  
      gameOver('Вы выиграли!', -1, 0) 
    } else if (lost.textContent == 4) {  
      gameOver('Вы проиграли!', 0, -1)
    }

    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1
    } else if (!hole.classList.contains('hole_has-mole')) {
      lost.textContent = Number(lost.textContent) + 1
    }
  }
}

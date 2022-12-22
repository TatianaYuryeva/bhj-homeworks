const numberOfHoles = document.getElementsByClassName('hole').length
let dead = document.getElementById('dead')
let lost = document.getElementById('lost')

getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i <= numberOfHoles; i++) {
    let hole = getHole(i)
    hole.onclick  = () => {
        if (dead.textContent == 9) {   
            alert('Вы выиграли!')
            dead.textContent = -1
            lost.textContent = 0 
        } else if (lost.textContent == 4) {   
            alert ('Вы проиграли!')
            dead.textContent = 0
            lost.textContent = -1
        }

        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1
        } else if (!hole.classList.contains('hole_has-mole')) {
            lost.textContent = Number(lost.textContent) + 1
        }
    }
}

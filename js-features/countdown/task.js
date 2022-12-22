let time = Number(prompt('Введите количество секунд', 10))
const span = document.getElementById('timer')
span.textContent = time

let timer = setInterval(() => {
    time--
    if (time == -1) {
      clearInterval(timer)
      alert('Вы победили в конкурсе!')
    } else {
      span.textContent = Number(span.textContent) - 1
    }   
}, 1000)
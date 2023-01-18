const input = document.querySelector('.tasks__input')
const tasks = document.querySelector('.tasks__list')
const form = document.querySelector('.tasks__control')

function addTask(event) {
  if (event.key == 'Enter') {
    event.preventDefault()
    let task = document.createElement('div')
    task.classList.add('task')
    task.innerHTML = `
      <div class="task__title">${input.value}</div>
      <a href="#" class="task__remove">&times;</a>
      `
    tasks.append(task)
    form.reset()
    }
    let removers = document.querySelectorAll('.task__remove')
    for (let i = 0; i < removers.length; i++ ) {
      removers[i].addEventListener('click', removeTask)
    }
}

function removeTask(event) {
  event.currentTarget.closest('.task').remove()
}

input.addEventListener('keydown', addTask)

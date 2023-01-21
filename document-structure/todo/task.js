const input = document.querySelector('.tasks__input')
const tasks = document.querySelector('.tasks__list')
const form = document.querySelector('.tasks__control')
const btn = document.querySelector('.tasks__add')

function addTask(event) {
    event.preventDefault()
    let task = document.createElement('div')
    task.classList.add('task')
    let taskTitle = input.value.trim()
    task.innerHTML = `
      <div class="task__title">${taskTitle}</div>
      <a href="#" class="task__remove">&times;</a>
      `
    if (taskTitle.length > 0) {
      tasks.append(task)
      form.reset()
      let remover = task.children[1]
      remover.addEventListener('click', removeTask)
    }
}

function removeTask(event) {
  event.currentTarget.closest('.task').remove()
}

btn.addEventListener('click', addTask)

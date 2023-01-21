const elementsWithTooltip = document.querySelectorAll('.has-tooltip')

function createTooltip(elem) {
  let tooltip = document.createElement('div')
  tooltip.classList.add('tooltip')
  let coords = elem.getBoundingClientRect()
  tooltip.style.left = coords.left + 'px'
  tooltip.style.top = coords.bottom + 'px'
  tooltip.innerText = elem.getAttribute('title')
  elem.append(tooltip)
  }

function activateTooltip(event) {
  event.preventDefault()
  event.currentTarget.lastChild.classList.toggle('tooltip_active')
}

elementsWithTooltip.forEach(createTooltip)
elementsWithTooltip.forEach(elem => elem.addEventListener('click', activateTooltip))

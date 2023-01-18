const elementsWithTooltip = document.querySelectorAll('.has-tooltip')

function createTooltip(event) {
  elem = event.currentTarget
  let tooltip = document.createElement('div')
  tooltip.classList.add('tooltip')
  let coords = elem.getBoundingClientRect()
  tooltip.style.left = coords.left + 'px'
  tooltip.style.top = coords.bottom + 'px'
  tooltip.innerText = elem.getAttribute('title')
  document.body.append(tooltip)
}

function activateTooltip(event) {
  event.preventDefault()
  const tooltips = document.querySelectorAll('.tooltip')
  for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].classList.add('tooltip_active')
  }
}

for (let i = 0; i < elementsWithTooltip.length; i++) {
  let elem = elementsWithTooltip[i]
  elem.addEventListener('click', createTooltip)
  elem.addEventListener('click', activateTooltip)
}
const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = document.querySelectorAll('.tab__content')

function showContent(event) {
  let activeTab = document.querySelector('.tab_active')
  activeTab.classList.remove('tab_active')
  event.currentTarget.classList.add('tab_active')
  contents[tabs.indexOf(activeTab)].classList.remove('tab__content_active')
  contents[tabs.indexOf(event.currentTarget)].classList.add('tab__content_active')
}

for (i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', showContent)
}
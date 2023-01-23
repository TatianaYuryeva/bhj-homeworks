const dropdownButton = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

function openDropdown() {
  dropdownList.classList.add('dropdown__list_active');
}

function closeDropdown(event) {
  event.preventDefault();
  dropdownButton.textContent = event.currentTarget.textContent;
  dropdownList.classList.remove('dropdown__list_active');
}

dropdownButton.addEventListener("click", openDropdown);

for (let i = 0; i < dropdownLinks.length; i++) {
  let link = dropdownLinks[i];
  link.addEventListener("click", closeDropdown);
}
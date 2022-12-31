const links = document.querySelectorAll('.menu__link');

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  let subMenu = link.closest('.menu__item').querySelector('.menu_sub');
  
  if (subMenu !== null) {
    link.onclick  = () => {
      subMenu.classList.toggle('menu_active');
      return false;
    } 
  }
}

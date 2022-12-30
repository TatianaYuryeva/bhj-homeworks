const links = document.querySelectorAll('.menu__link');

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  let subMenu = link.closest('.menu__item').querySelector('.menu_sub');
  link.onclick  = () => {
    if (subMenu !== null) {
      subMenu.classList.add('menu_active');
      subMenu.onclick = () => {
        return false;
      }
    }  
    return false;  
  }
}
const mainModal = document.getElementById('modal_main')
const closeModal = document.querySelectorAll('.modal__close')
const successModal = document.getElementById('modal_success')
const showSuccess = document.querySelector('.show-success')

mainModal.classList.add('modal_active')

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].onclick = () => {
    mainModal.classList.remove('modal_active')
    successModal.classList.remove('modal_active')
  }
}

showSuccess.onclick = () => {
  mainModal.classList.remove('modal_active')
  successModal.classList.add('modal_active')
}

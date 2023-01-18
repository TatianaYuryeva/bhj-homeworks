const widget = document.querySelector('.chat-widget')
widget.classList.add('chat-widget_active')

const input = document.querySelector('#chat-widget__input')
console.log(input.value)

const messages = document.querySelector('.chat-widget__messages')
function message(event) {
  console.log(event.key)
if(event.key == 'Enter') {
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">09:21</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;
}
}
input.addEventListener('keyup', message)
input.addEventListener('input', () => {
  console.log(input.value)
})
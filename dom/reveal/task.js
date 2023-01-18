const reveal = document.querySelectorAll('.reveal')
console.log(reveal)

function isVisible1() {
  const{ top, bottom } = reveal[0].getBoundingClientRect()
  console.log({ top, bottom })

  if (bottom < 0) {
    return false
    }
  if(top > window.innerHeight) {
    return false
    }
  else {
    reveal[0].classList.add('reveal_active')
    }
}

function isVisible2() {
  const{ top, bottom } = reveal[1].getBoundingClientRect()
  console.log({ top, bottom })

  if (bottom < 1) {
    return false
  }
  if(top > window.innerHeight) {
    return false
  }
  else {
    reveal[1].classList.add('reveal_active')
  }
}

document.addEventListener('scroll', isVisible1)
document.addEventListener('scroll', isVisible2)

// for (let i = 0; i < reveal.length; i++) {
//     document.addEventListener('scroll', function() {
//         console.log(this)
//     })
// }
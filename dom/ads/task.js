const rotatorCases = document.querySelectorAll('.rotator__case')
// for (let i = 0; i < cases.length; i++) {
//   cases[i].classList.add('rotator__case_active')
//   //setTimeout(1000)
//   cases[i].classList.remove('rotator__case_active')
// }

rotatorCases[0].classList.add('rotator__case_active')

console.log(document.querySelector('.rotator__case_active').nextElementSibling)
function activate() {
    let nextRotatorCase = document.querySelector('.rotator__case_active').nextElementSibling
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active')
    nextRotatorCase.classList.add('rotator__case_active')
}

// for (let i = 0; i < rotatorCases.length; i++) {
//   let nextRotatorCase = document.querySelector('.rotator__case_active').nextElementSibling
//   document.querySelector('.rotator__case_active').classList.remove('rotator__case_active')
//   nextRotatorCase.classList.add('rotator__case_active')
//   }

//setInterval(activate, 1000)


// for (let i = 0; i < rotatorCases.length; i++) {
//   setTimeout(activate, 1000)
// }

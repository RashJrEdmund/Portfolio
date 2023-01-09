const showButton = document.querySelector('.show-all-btn')
const showButton2 = document.querySelector('.show-all-btn2')
const hiddenContainer = document.querySelector('.varying')

const toogleBtnDisplay = () => {
  showButton.classList.toggle('show-all-btn-display')
  showButton2.classList.toggle('show-all-btn-display')

  hiddenContainer.classList.toggle('hidden')
}

showButton.addEventListener('click', () => {
  toogleBtnDisplay()
})

showButton2.addEventListener('click', () => {
  toogleBtnDisplay()
})

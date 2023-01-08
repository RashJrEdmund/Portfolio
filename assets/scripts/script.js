const showButton = document.querySelector('.show-all-btn')
const hiddenContainer = document.querySelectorAll('.varying')

let clicks = 0
console.log(showButton)
console.log(hiddenContainer)

showButton.addEventListener('click', () => {
  hiddenContainer.forEach(reappearing => {
    console.log(hiddenContainer)

    reappearing.classList.remove('hidden')

    showButton.innerHTML = '<span class="span2"></span><span class="span3">&#60;</span> Show Less'

    clicks += 1

    console.log('current clicks =', clicks)
    if (clicks > 1) {
      addHidden()
      clicks = 0
    }
  })
})

function addHidden () {
  hiddenContainer.forEach(reappearing => {
    reappearing.classList.add('hidden')
    showButton.innerHTML = '<span class="span2"></span> Show More <span class="span3">&#62;</span>'
  })
}

const showButton = document.querySelector('.show-all-btn');
const hiddenContainer = document.querySelectorAll('.varying');

let clicks = 0;
console.log(showButton);
console.log(hiddenContainer);

showButton.addEventListener('click', () => {
    hiddenContainer.forEach(reappearing => {
        console.log(hiddenContainer);

        reappearing.classList.remove('hidden');

        showButton.innerHTML = "< show less";

        clicks += 1;

        console.log('current clicks =', clicks);
        if (clicks > 1) {
            addHidden ();
            clicks = 0;
        }
    })
})

function addHidden () {
    hiddenContainer.forEach(reappearing => {
        reappearing.classList.add('hidden');
        showButton.innerHTML = "show more >";
    })
}

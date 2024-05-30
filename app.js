const allSquare = document.querySelectorAll('.square')

allSquare.forEach((val, key) => {
    val.textContent = key //debug
    val.addEventListener('click', drawXO)
})

function drawXO(e) {
    console.log(e.target)
}
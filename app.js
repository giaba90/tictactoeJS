const allSquare = document.querySelectorAll('.square')

var go = 'circle'

allSquare.forEach((val, key) => {
    val.setAttribute('id', key)
    val.addEventListener('click', drawXO)
})

function drawXO(e) {
    go = go === 'circle' ? 'cross' : 'circle'
    const sign = document.createElement("div")
    sign.classList.add(go)
    e.target.appendChild(sign)
    e.target.removeEventListener('click', drawXO)
}
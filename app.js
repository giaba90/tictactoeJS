const allSquare = document.querySelectorAll('.square')
var go = 'cross'

allSquare.forEach((val, key) => {
    //  val.textContent = key //debug
    val.setAttribute('id', key)
    val.addEventListener('click', drawXO)
})

function drawXO(e) {
    go = go === 'circle' ? 'cross' : 'circle'
    const sign = document.createElement("div")
    sign.classList.add(go)
    e.target.appendChild(sign)
    e.target.removeEventListener('click', drawXO)
    calculateScore()
}

function calculateScore() {
    const solutions = [
        ["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"],
        ["0", "3", "6"], ["1", "4", "7"], ["2", "5", "8"],
        ["0", "4", "8"], ["2", "4", "6"]
    ]

    var winner = ""
    var allCircles = document.querySelectorAll('.circle')
    var allCrosses = document.querySelectorAll('.cross')

    solutions.forEach((arr) => {
        //prendo un array alla volta e controllo se i suoi elementi singoli sono tutti uguali agli id dentro allCircles
        //   allCircles[0].parentNode.id
    })

    //  console.log(allCircles)
}
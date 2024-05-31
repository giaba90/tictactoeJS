const allSquare = document.querySelectorAll('.square')
var go = 'cross'

allSquare.forEach((val, key) => {
    val.setAttribute('id', key)
    val.addEventListener('click', drawXO)
})

function drawXO(e) {
    const infogame = document.getElementsByClassName('infogame')[0].innerText = ''
    go = go === 'circle' ? 'cross' : 'circle'
    const sign = document.createElement('div')
    sign.classList.add(go)
    e.target.appendChild(sign)
    e.target.removeEventListener('click', drawXO)
    calculateScore()
}

function calculateScore() {
    const solutions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    const allSquares = document.querySelectorAll('.square')
    const allCircles = document.querySelectorAll('.circle')
    const allCrosses = document.querySelectorAll('.cross')

    if (allCircles.length >= 3 || allCrosses.length >= 3) {
        solutions.forEach(arr => {
            const winnerCircle = arr.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
            const winnerCross = arr.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))
            if (winnerCircle) {
                const infogame = document.getElementsByClassName('infogame')[0].innerText = 'Ha vinto il cerchio'
                allSquares.forEach((val) => {
                    val.removeEventListener('click', drawXO)
                })
            }
            if (winnerCross) {
                const infogame = document.getElementsByClassName('infogame')[0].innerText = 'Ha vinto la croce'
                allSquares.forEach((val) => {
                    val.removeEventListener('click', drawXO)
                })
            }
        })
    }
}
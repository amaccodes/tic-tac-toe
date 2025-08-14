console.log('Hello World!')

const sectionMeasurement = 150
const boardMeasurement = sectionMeasurement * 3.1
const thickness = 5


const main = document.querySelector('main')
const board = document.createElement('div')
board.style.width = `${boardMeasurement}px`
board.style.height = `${boardMeasurement}px`
board.style.margin = '100px'
board.style.display = 'flex'
board.style.flexWrap = 'wrap'
board.setAttribute('id', 'game-board')
main.appendChild(board)

for (i = 1; i <= 9; i++) {
    const div = document.createElement('div')
    div.setAttribute('id', 'board-section')
    div.style.height = `${sectionMeasurement}px`
    div.style.width = `${sectionMeasurement}px`
    if (i % 3 == 0) {
        div.style.borderLeft = `${thickness}px solid whitesmoke`
    } else if (i == 1 || i == 4 || i == 7) {
        div.style.borderRight = `${thickness}px solid whitesmoke`
    }
    
    if (i == 1 || i ==  2 || i == 3) {
        div.style.borderBottom = `${thickness}px solid whitesmoke`
    } else if (i == 4 || i ==  5 || i == 6) {
        div.style.borderBottom = `${thickness}px solid whitesmoke`
    }

    div.addEventListener('click', function (player) {
        // get the player's marker 

        // put the correct icon in the div
    })

    board.appendChild(div)
}
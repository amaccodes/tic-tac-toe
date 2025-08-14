console.log('Hello World!')

// IIFE (Immediately Invoked Function Expression), this is essentially when you define and invoke a function in the same block of code
const gameBoardd = (function () {
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
}) ()


// create game board object using IIFE 
const gameBoard = (function createGameBoard() {
    return {board: ['_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9']}
}) ()

console.log(gameBoard.board)

// create player factory function 
function createPlayer(playerNumber, mark) {
    return {playerNumber, mark}
}

// create game factory function 
const game = (function () {
    let player1
    let player2

    // choose your mark
    const markChosen = prompt('What mark do you want? Type \'x\' or \'o\'. ')
    if (markChosen === 'x') {
        const num = 1
        player1 = createPlayer(num, markChosen)
        alert('You are player 1, the other person is player 2')
    } else {
        const num = 2
        player2 = createPlayer(num, markChosen)
        alert('You are player 2, the other person is player 1')
    }

    for (i = 1; i <= 9; i++) {
        // player 1 starts the game
        if (
            gameBoard.board[0] === 1 &&
            gameBoard.board[1] === 1 &&
            gameBoard.board[2] === 1 ||
            gameBoard.board[0] === 1 &&
            gameBoard.board[4] === 1 &&
            gameBoard.board[8] === 1 ||
            gameBoard.board[0] === 1 &&
            gameBoard.board[3] === 1 &&
            gameBoard.board[6] === 1 ||
            gameBoard.board[2] === 1 &&
            gameBoard.board[4] === 1 &&
            gameBoard.board[6] === 1 ||
            gameBoard.board[2] === 1 &&
            gameBoard.board[5] === 1 &&
            gameBoard.board[8] === 1 ||
            gameBoard.board[6] === 1 &&
            gameBoard.board[7] === 1 &&
            gameBoard.board[8] === 1 ||
            gameBoard.board[1] === 1 &&
            gameBoard.board[4] === 1 &&
            gameBoard.board[7] === 1 
        ) {
            console.log('Player 1 Wins!')
            alert('Player 1 Wins!')
            break
        }
        else if (
            gameBoard.board[0] === 0 &&
            gameBoard.board[1] === 0 &&
            gameBoard.board[2] === 0 ||
            gameBoard.board[0] === 0 &&
            gameBoard.board[4] === 0 &&
            gameBoard.board[8] === 0 ||
            gameBoard.board[0] === 0 &&
            gameBoard.board[3] === 0 &&
            gameBoard.board[6] === 0 ||
            gameBoard.board[2] === 0 &&
            gameBoard.board[4] === 0 &&
            gameBoard.board[6] === 0 ||
            gameBoard.board[2] === 0 &&
            gameBoard.board[5] === 0 &&
            gameBoard.board[8] === 0 ||
            gameBoard.board[6] === 0 &&
            gameBoard.board[7] === 0 &&
            gameBoard.board[8] === 0 ||
            gameBoard.board[1] === 0 &&
            gameBoard.board[4] === 0 &&
            gameBoard.board[7] === 0 
        ) {
            console.log('Player 2 Wins!')
            alert('Player 2 Wins!')
            break
        } else if (i == 9) {
            console.log('No one wins. It was a tie womp womp wommmmp...')
            alert('No one wins. It was a tie womp womp wommmmp...')
            break
        } else if (gameBoard.board[0] != 1 &&
            gameBoard.board[1] != 1 &&
            gameBoard.board[2] != 1 ||
            gameBoard.board[0] != 0 &&
            gameBoard.board[1] != 0 &&
            gameBoard.board[2] != 0 ||
            gameBoard.board[0] != 1 &&
            gameBoard.board[4] != 1 &&
            gameBoard.board[8] != 1 ||
            gameBoard.board[0] != 0 &&
            gameBoard.board[4] != 0 &&
            gameBoard.board[8] != 0 ||
            gameBoard.board[0] != 1 &&
            gameBoard.board[3] != 1 &&
            gameBoard.board[6] != 1 ||
            gameBoard.board[0] != 0 &&
            gameBoard.board[3] != 0 &&
            gameBoard.board[6] != 0 ||
            gameBoard.board[2] != 1 &&
            gameBoard.board[4] != 1 &&
            gameBoard.board[6] != 1 ||
            gameBoard.board[2] != 0 &&
            gameBoard.board[4] != 0 &&
            gameBoard.board[6] != 0 ||
            gameBoard.board[2] != 1 &&
            gameBoard.board[5] != 1 &&
            gameBoard.board[8] != 1 ||
            gameBoard.board[2] != 0 &&
            gameBoard.board[5] != 0 &&
            gameBoard.board[8] != 0 ||
            gameBoard.board[6] != 1 &&
            gameBoard.board[7] != 1 &&
            gameBoard.board[8] != 1 ||
            gameBoard.board[6] != 0 &&
            gameBoard.board[7] != 0 &&
            gameBoard.board[8] != 0 ||
            gameBoard.board[1] != 1 &&
            gameBoard.board[4] != 1 &&
            gameBoard.board[7] != 1 ||
            gameBoard.board[1] != 0 &&
            gameBoard.board[4] != 0 &&
            gameBoard.board[7] != 0 
        ) {
            if (i % 2 == 0) {
                console.log('Player 2 make your move!!')
                move = prompt('Player 2 make your move!!')
                gameBoard.board[move - 1] = 0
            } else if (i % 2 != 0) {
                console.log('Player 1 make your move!!')
                move = prompt('Player 1 make your move!!')
                gameBoard.board[move - 1] = 1
            }
        } 
        console.log('')
        console.log(gameBoard.board)
        console.log('')
    }
       



})()




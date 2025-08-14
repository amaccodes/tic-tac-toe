console.log('Hello World!')

// !! This implementation is brute force without objects with is the incorrect and inefficient way to solve this problem

let move

// create game board object using IIFE 
const gameBoard = (function createGameBoard() {
    return {board: ['_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9']}
}) ()

console.log(gameBoard.board)

// create player factory function 
function createPlayer(playerNumber, mark) {
    return {playerNumber, mark}
}

// // create game factory function 
// const game = (function () {
//     let player1
//     let player2

//     // choose your mark
//     const markChosen = prompt('What mark do you want? Type \'x\' or \'o\'. ')
//     if (markChosen === 'x') {
//         const num = 1
//         player1 = createPlayer(num, markChosen)
//         alert('You are player 1, the other person is player 2')
//     } else {
//         const num = 2
//         player2 = createPlayer(num, markChosen)
//         alert('You are player 2, the other person is player 1')
//     }

//     turn =[]

//     for (i = 1; i <= 9; i++) {
//         // player 1 starts the game
//         turn.push(i)
//         if (
//             gameBoard.board[0] === 1 &&
//             gameBoard.board[1] === 1 &&
//             gameBoard.board[2] === 1 ||
//             gameBoard.board[0] === 1 &&
//             gameBoard.board[4] === 1 &&
//             gameBoard.board[8] === 1 ||
//             gameBoard.board[0] === 1 &&
//             gameBoard.board[3] === 1 &&
//             gameBoard.board[6] === 1 ||
//             gameBoard.board[2] === 1 &&
//             gameBoard.board[4] === 1 &&
//             gameBoard.board[6] === 1 ||
//             gameBoard.board[2] === 1 &&
//             gameBoard.board[5] === 1 &&
//             gameBoard.board[8] === 1 ||
//             gameBoard.board[6] === 1 &&
//             gameBoard.board[7] === 1 &&
//             gameBoard.board[8] === 1 ||
//             gameBoard.board[1] === 1 &&
//             gameBoard.board[4] === 1 &&
//             gameBoard.board[7] === 1 
//         ) {
//             console.log('Player 1 Wins!')
//             alert('Player 1 Wins!')
//             break
//         }
//         else if (
//             gameBoard.board[0] === 0 &&
//             gameBoard.board[1] === 0 &&
//             gameBoard.board[2] === 0 ||
//             gameBoard.board[0] === 0 &&
//             gameBoard.board[4] === 0 &&
//             gameBoard.board[8] === 0 ||
//             gameBoard.board[0] === 0 &&
//             gameBoard.board[3] === 0 &&
//             gameBoard.board[6] === 0 ||
//             gameBoard.board[2] === 0 &&
//             gameBoard.board[4] === 0 &&
//             gameBoard.board[6] === 0 ||
//             gameBoard.board[2] === 0 &&
//             gameBoard.board[5] === 0 &&
//             gameBoard.board[8] === 0 ||
//             gameBoard.board[6] === 0 &&
//             gameBoard.board[7] === 0 &&
//             gameBoard.board[8] === 0 ||
//             gameBoard.board[1] === 0 &&
//             gameBoard.board[4] === 0 &&
//             gameBoard.board[7] === 0 
//         ) {
//             console.log('Player 2 Wins!')
//             alert('Player 2 Wins!')
//             break
//         } else if (i == 9) {
//             console.log('No one wins. It was a tie womp womp wommmmp...')
//             alert('No one wins. It was a tie womp womp wommmmp...')
//             break
//         } else if (gameBoard.board[0] != 1 &&
//             gameBoard.board[1] != 1 &&
//             gameBoard.board[2] != 1 ||
//             gameBoard.board[0] != 0 &&
//             gameBoard.board[1] != 0 &&
//             gameBoard.board[2] != 0 ||
//             gameBoard.board[0] != 1 &&
//             gameBoard.board[4] != 1 &&
//             gameBoard.board[8] != 1 ||
//             gameBoard.board[0] != 0 &&
//             gameBoard.board[4] != 0 &&
//             gameBoard.board[8] != 0 ||
//             gameBoard.board[0] != 1 &&
//             gameBoard.board[3] != 1 &&
//             gameBoard.board[6] != 1 ||
//             gameBoard.board[0] != 0 &&
//             gameBoard.board[3] != 0 &&
//             gameBoard.board[6] != 0 ||
//             gameBoard.board[2] != 1 &&
//             gameBoard.board[4] != 1 &&
//             gameBoard.board[6] != 1 ||
//             gameBoard.board[2] != 0 &&
//             gameBoard.board[4] != 0 &&
//             gameBoard.board[6] != 0 ||
//             gameBoard.board[2] != 1 &&
//             gameBoard.board[5] != 1 &&
//             gameBoard.board[8] != 1 ||
//             gameBoard.board[2] != 0 &&
//             gameBoard.board[5] != 0 &&
//             gameBoard.board[8] != 0 ||
//             gameBoard.board[6] != 1 &&
//             gameBoard.board[7] != 1 &&
//             gameBoard.board[8] != 1 ||
//             gameBoard.board[6] != 0 &&
//             gameBoard.board[7] != 0 &&
//             gameBoard.board[8] != 0 ||
//             gameBoard.board[1] != 1 &&
//             gameBoard.board[4] != 1 &&
//             gameBoard.board[7] != 1 ||
//             gameBoard.board[1] != 0 &&
//             gameBoard.board[4] != 0 &&
//             gameBoard.board[7] != 0 
//         ) {
//             if (i % 2 == 0) {
//                 console.log('Player 2 make your move!!')
//                 alert('Player 2 make your move!!')
//             } else if (i % 2 != 0) {
//                 console.log('Player 1 make your move!!')
//                 alert('Player 1 make your move!!')
//             }
//         } 
//         console.log('')
//         console.log(gameBoard.board)
//         console.log('')
//     }
// })()

let turn = [-1]
// IIFE (Immediately Invoked Function Expression), this is essentially when you define and invoke a function in the same block of code
const gameBoardd = (function () {
    const main = document.querySelector('main')
    main.style.display = 'flex'
    main.style.flexDirection = 'column'
    main.style.alignItems = 'center'
    main.style.gap = '12px'
    main.style.justifyContent = 'start'

    const sectionMeasurement = window.innerWidth / 10
    const boardMeasurement = sectionMeasurement * 3.1
    const thickness = 5


    const board = document.createElement('div')
    board.style.width = `${boardMeasurement}px`
    board.style.height = `${boardMeasurement}px`
    board.style.margin = '100px'
    board.style.marginBottom = '50px'
    board.style.display = 'flex'
    board.style.flexShrink = '0px'
    board.style.flexWrap = 'wrap'
    board.setAttribute('id', 'game-board')
    main.appendChild(board)

    for (i = 1; i <= 9; i++) {
        const div = document.createElement('div')
        div.setAttribute('data-index', i - 1);
        div.classList.add('board-section')
        div.style.height = `${sectionMeasurement}px`
        div.style.display = 'flex'
        div.style.justifyContent = 'center'
        div.style.alignContent = 'center'
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

        div.addEventListener('click', function () {
            const index = parseInt(div.dataset.index)

            // 1) Block if already filled
            if (gameBoard.board[index] === 0 || gameBoard.board[index] === 1 || this.hasChildNodes()) {
                gameBoard.board = ['_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9']
                const cells = document.querySelectorAll('#game-board .board-section')
                cells.forEach(cell => {
                    cell.innerHTML = ''
                })
                main.removeChild(main.firstElementChild)
                turn = [-1]
                return
            } else if (
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
                gameBoard.board[7] === 1 ||
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
                gameBoard.board = ['_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9']
                const cells = document.querySelectorAll('#game-board .board-section')
                cells.forEach(cell => {
                    cell.innerHTML = ''
                })
                main.removeChild(main.firstElementChild)
                turn = [-1]
                return
            }


            
            // get the player's marker 
            if (turn[turn.length - 1] % 2 == 0){
                mark = 'o'
            } else {
                mark = 'x'
            }

            // put the correct icon in the div
            if (mark == 'x' && !div.hasChildNodes()) {
                const cross = document.createElement('img')
                cross.src = 'assets/cross-svgrepo-com.svg'
                cross.height = sectionMeasurement * .8
                div.appendChild(cross)
                turn.push(turn[turn.length - 1] + 1)
                gameBoard.board[index] = 1;
                console.log(turn)
                console.log(gameBoard.board)
            } else if (!div.hasChildNodes()) {
                const circle = document.createElement('img')
                circle.src = 'assets/circle-svgrepo-com.svg'
                circle.height = sectionMeasurement * .8
                div.appendChild(circle)
                turn.push(turn[turn.length - 1] + 1)
                gameBoard.board[index] = 0;
                console.log(turn)
                console.log(gameBoard.board)
            }

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
                const text = document.createElement('p')
                text.style.color = 'white'
                text.style.fontSize = '40px'
                text.textContent = 'Player 1 Wins!'
                main.prepend(text)
                return
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
                const text = document.createElement('p')
                text.style.color = 'white'
                text.style.fontSize = '40px'
                text.textContent = 'Player 2 Wins!'
                main.prepend(text)
                return
            } else if (gameBoard.board.every(cell => cell === 1 || cell === 0)) {
                console.log('No one wins. It was a tie womp womp wommmmp...')
                const text = document.createElement('p')
                text.style.color = 'white'
                text.style.fontSize = '40px'
                text.textContent = 'No one wins. It was a tie womp womp wommmmp...'
                main.prepend(text)
                return
            }
            
        })

        board.appendChild(div)
    }
}) ()



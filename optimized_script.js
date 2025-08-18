console.log('Tic Tac Toe')

// build player factory
function createPlayer(player, mark) {
    return {player, mark}
}




// build a game board module
const GameBoard = (function () {
    // we want to track/store the board using an array, intialize it
    let board = Array(9).fill(null)
    console.log(board)

    // we want to be able to reset the board 
    const resetBoard = () => board.fill(null)

    // we also want to be able to access the board 
    const getBoard = () => board

    // we also want to be able to set our mark
    const setMark = (index, mark) => {
        if (!board[index]) {
            board[index] = mark
            console.log(mark)
            console.log(board)
        }
    }

    // return the object that stores all of this information
    return {board, resetBoard, getBoard, setMark}
})()





// game controller module 

const GameController = (function () {
    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');

    let currentPlayer = player1;
    let GameOver = false;

    const restart = () => {
            GameBoard.resetBoard();
            GameOver = false;
            currentPlayer = player1;
            console.clear();
            const main = document.querySelector('main')
            const cells = document.querySelectorAll('#game-board .board-section')
                cells.forEach(cell => {
                    cell.innerHTML = ''
                })
            console.log("New Game Started!");
        }

    const playRound = (index) => {


        if (GameOver) {
            restart()
            return
        }

        // Place mark if spot is empty
        GameBoard.setMark(index, currentPlayer.mark);

        // Check win
        const board = GameBoard.getBoard();
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of winningPatterns) {
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                GameOver = true;
                console.log(`${currentPlayer.player} wins!`);
                return;
            }
        }

        // Check tie
        if (board.every(cell => cell)) {
            GameOver = true;
            console.log("It was a tie. Womp womp womP...");
            return;
        }

        // Switch player
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    };

    return { playRound, restart, currentPlayer, GameOver};
})();


console.log(GameController)

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

    for (let i = 1; i <= 9; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', i - 1);
        div.classList.add('board-section');
        div.style.height = `${sectionMeasurement}px`;
        div.style.width = `${sectionMeasurement}px`;
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center'; 
        
        // borders...
        if (i % 3 == 0) {
            div.style.borderLeft = `${thickness}px solid whitesmoke`;
        } else if (i == 1 || i == 4 || i == 7) {
            div.style.borderRight = `${thickness}px solid whitesmoke`;
        }
        if (i <= 3 || (i >= 4 && i <= 6)) {
            div.style.borderBottom = `${thickness}px solid whitesmoke`;
        }

        //Corrected click handler
        div.addEventListener('click', () => {
            GameController.playRound(i - 1);
            // put the correct icon in the div

            let mark = GameBoard.getBoard()[i - 1]

            // only draw if empty
            if (!div.hasChildNodes() && mark) {
                const img = document.createElement('img');
                img.src = mark === 'X'
                    ? 'assets/cross-svgrepo-com.svg'
                    : 'assets/circle-svgrepo-com.svg';
                img.height = sectionMeasurement * 0.8;
                div.appendChild(img);
            }

            if (GameController.GameOver === true) {
                GameController.restart()
            }
        });

        board.appendChild(div);
    }

})()

    



const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;

let activePlayer = 0;

let currentRound = 1;


const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors')
const gameAreaElement = document.getElementById('active-game')
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over')
const spanWinner = document.getElementById('winner-name')
const drawElement = document.getElementById('draw');
 

const editPlayer1Button = document.getElementById('edit-player-1-btn');
const editPlayer2Button = document.getElementById('edit-player-2-btn');
const cancelConfig = document.getElementById('cancel-config-button');
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li')
const gameBoardElement = document.getElementById('game-board')

startNewGameBtnElement.addEventListener('click', newGame)


editPlayer1Button.addEventListener('click', openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig);

cancelConfig.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);



formElement.addEventListener('submit', savePlayerConfig);



//  for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click', selectGameField )

//  }


gameBoardElement.addEventListener('click', selectGameField)

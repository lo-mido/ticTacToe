let playerText=document.getElementById('playerText');
let restartBtn=document.getElementById('restartBtn');
let boxes=Array.from(document.getElementsByClassName('box'));
// initializes the variables that will be used to start the game

const O_TEXT="O";
const X_TEXT="X";
let currentPlayer=X_TEXT;
// keeps track of the spaces being clicked
let spaces=Array(9).fill(null);
// Creates functionality for the game board

const startGame=() => {
    boxes.forEach(box => box.addEventListener('click',boxClicked));
    
}
// function to start game and to loop through the boxes.

function boxClicked(e){
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] =currentPlayer
        e.target.innerText = currentPlayer
        if(playerHasWon()){
            playerText = `${currentPlayer} Is the Winner!`;

        }

        currentPlayer = currentPlayer ==X_TEXT ? O_TEXT: X_TEXT

    }
}

const winningCombos =[
    [0,1,2], 
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerHasWon() {

}

restartBtn.addEventListener('click',restart)

function restart(){
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText=''
        box.getElementsByClassName.backgroundColor=''
    })

playerText = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}

startGame();
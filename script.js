let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));
// initializes the variables that will be used to start the game

let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);
// let drawIndicator = getComputedStyle(document.body).getPropertyValue(
//   "--all-blocks"
// );
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
// keeps track of the spaces being clicked
let spaces = Array(9).fill(null);
let count_plays = 0;
// Creates functionality for the game board

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};
// function to start game and to loop through the boxes.

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id] && count_plays < 9) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerHasWon() !== false) {
      playerText.innerHTML = `${currentPlayer} Is the Winner!`;
      let winning_block = playerHasWon();
      count_plays = 9;
      winning_block.map(
        (box) => (boxes[box].style.backgroundColor = winnerIndicator)
      );
      return;
    }
    count_plays++;
    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
  }
  console.log(count_plays);
  if (count_plays === 9) {
    // alert('draw game');
    playerText.innerHTML = "Draw Game!";
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c])
      return [a, b, c];
  }
  return false;
}

restartBtn.addEventListener("click", restart);

function restart() {
  spaces.fill(null);
  count_plays = 0;
  boxes.forEach((box) => {
    box.innerText = "";
    box.getElementsByClassName.backgroundColor = "";
    box.style.color = "#f2c14e";
  });

  playerText.innerHTML = "Tic Tac Toe";

  currentPlayer = X_TEXT;
}

startGame();

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", handleSquareClick);
});

/* PLACE TILE */
function handleSquareClick(event) {
  const index = event.target.getAttribute("data-index");
  if (board[index] === "") {
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.style.color = currentPlayer === "X" ? "red" : "blue";
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`The winner is ${board[a]}!`);
      resetGame();
      return;
    }
  }

  if (board.every((square) => square !== "")) {
    alert("DRAW!");
    resetGame();
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  document.querySelectorAll(".square").forEach((square) => {
    square.textContent = "";
  });
}

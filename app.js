var TicTacToe = {
  board: document.getElementsByClassName("board")[0],
  fields: document.getElementsByClassName("td"),
  currentPlayer: document.getElementById("current"),
  checkedFields: Array(9).fill(""),
  win: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  // this function will initialse the variables
  init: function () {
    this.current = "O";
    this.currentPlayer.textContent = this.current;
    // loop in the variables
    for (var i = 0; i < this.fields.length; i++) {
      this.fields[i].textContent = "";
      this.checkedFields[i] = "";
    }
  },
  // this function will check the possible combinations to win the game
  checkWinner: function () {
    for (var i = 0; i < this.win.length; i++) {
      if (
        this.checkedFields[this.win[i][0]] === this.current &&
        this.checkedFields[this.win[i][1]] === this.current &&
        this.checkedFields[this.win[i][2]] === this.current
      ) {
        alert("And the winner is " + this.current);
        this.init();
        return true;
      } else if (this.checkedFields.indexOf("") === -1) {
        alert("Tie no one win try again");
        this.init();
        return true;
      }
    }
  },
  // this function allows to click on the chosen square inside the game
  handleClick: function (e) {
    var currentField = e.target;
    var currentFieldNumber = Array.prototype.indexOf.call(
      this.fields,
      currentField
    );
    if (!currentField.textContent) {
      currentField.textContent = this.current;
      this.checkedFields[currentFieldNumber] = this.current;
      if (!this.checkWinner()) {
        this.current = this.current === "O" ? "X" : "O";
        this.currentPlayer.textContent = this.current;
      }
    }
  },
};
// in this part , we will call the functions that we use in order to start a new game
TicTacToe.init();
TicTacToe.board.addEventListener("click", function (e) {
  TicTacToe.handleClick(e);
});
function reset() {
  location.reload();
}

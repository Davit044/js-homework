class TicTacToe {
    constructor() {
        this.board = [];
        this.currentPlayer = 'X';
        this.winner = null;
        this.statusElement = document.querySelector('.game--status');
        this.cells = document.querySelectorAll('.cell');
        this.restartButton = document.querySelector('.game--restart');

        this.cells.forEach(cell => {
            cell.addEventListener('click', () => {
                const index = parseInt(cell.getAttribute('data-cell-index'));
                const row = Math.floor(index / 3);
                const col = index % 3;
                this.handleCellClick(row, col, cell);
            });
        });

        this.restartButton.addEventListener('click', () => this.initializeGame());

        this.initializeGame();
    }

    initializeGame() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
        this.winner = null;

        this.cells.forEach(cell => {
            cell.textContent = '';
        });

        this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    }

    handleCellClick(row, col, cellElement) {
        if (this.board[row][col] !== '' || this.winner) {
            alert("Invalid move! Try another cell.");
            return;
        }

        this.board[row][col] = this.currentPlayer;
        cellElement.textContent = this.currentPlayer;

        if (this.checkWinner()) {
            this.winner = this.currentPlayer;
            this.updateStatus(`Player ${this.currentPlayer} wins!`);
        } else if (this.isDraw()) {
            this.updateStatus("It's a draw!");
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateStatus(`Player ${this.currentPlayer}'s turn`);
        }
    }

    checkWinner() {
        const b = this.board;

        for (let i = 0; i < 3; ++i) {
            if (b[i][0] && b[i][0] === b[i][1] && b[i][1] === b[i][2]) return true;
            if (b[0][i] && b[0][i] === b[1][i] && b[1][i] === b[2][i]) return true;
        }

        if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) return true;
        if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) return true;

        return false;
    }

    isDraw() {
        return this.board.every(row => row.every(cell => cell !== ''));
    }

    updateStatus(message) {
        this.statusElement.textContent = message;
    }
}

const game = new TicTacToe();
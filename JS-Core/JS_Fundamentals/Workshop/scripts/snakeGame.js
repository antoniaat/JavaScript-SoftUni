;
const snakeGame = (function () {
    function createGame(config) {
        gameBoard.createGameBoard(config);
    }

    function start() {
        gameBoard.start();
    }

    return {
        createGame,
        start
    }
})();
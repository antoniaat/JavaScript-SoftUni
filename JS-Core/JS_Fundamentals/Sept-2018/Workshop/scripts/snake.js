;
const snake = (function () {

    const snakeData = {
        headPositionX: null,
        headPositionY: null,
        body: [],
        move: null
    };

    function generateSnakeUI(boardSize, snakeSize) {
        snakeData.headPositionX = parseInt(boardSize / 2);
        snakeData.headPositionY = parseInt(boardSize / 2);

        for (let i = 0; i < snakeSize; i++) {
            snakeData.body.push(`${snakeData.headPositionX - i}${snakeData.headPositionY}`)
        }

        snakeData.body.forEach((item) => {
            document.getElementById(item).className = "snake";
        });
    }

    function createSnake(config) {
        generateSnakeUI(config.boardSize, config.snakeSize);
    }

    function moveHead() {
        snakeData.move();
    }

    function setMoveDirection(direction) {
        if (direction === 'right') {
            snakeData.move = () => {
                snakeData.headPositionX += 1;
            };
        } else if (direction === 'left') {
            snakeData.move = () => {
                snakeData.headPositionX -= 1;
            };
        } else if (direction === 'down') {
            snakeData.move = () => {
                snakeData.headPositionY += 1;
            };
        } else if (direction === 'up') {
            snakeData.move = () => {
                snakeData.headPositionY -= 1;
            };
        }
    }

    function getSnake() {
        return snakeData;
    }

    function updateSnakePosition() {
        const head = `${snakeData.headPositionX}${snakeData.headPositionY}`;

        snakeData.body.unshift(head);
        
        const tail = snakeData.body.pop();

        document.getElementById(tail).className = '';
        document.getElementById(head).className = 'snake';
    }

    function grow() {
        snakeData.body.unshift(`${snakeData.headPositionX}${snakeData.headPositionY}`);
        snakeData.move();
    }

    return {
        createSnake,
        moveHead,
        setMoveDirection,
        getSnake,
        updateSnakePosition,
        grow
    };
})();
let snake
let food
let controller

function setup() {
    createCanvas(1200, 750)
    frameRate(10)

    Game.setGameOverWindow(DisplayType.none, gameOverWindow)

    snake = new Snake("green")
    Game.pickLocation()
    Game.setScore(0)

    controller = new Controller(() => {
        if (keyIsPressed && keyCode === UP_ARROW) {
            snake.setDir(0, -1)
        } else if (keyIsPressed && keyCode === DOWN_ARROW) {
            snake.setDir(0, 1)
        } else if (keyIsPressed && keyCode === RIGHT_ARROW) {
            snake.setDir(1, 0)
        } else if (keyIsPressed && keyCode === LEFT_ARROW) {
            snake.setDir(-1, 0)
        }
    })
}

function draw() {
    background(55)
    Game.checkObjectBounds(snake)
    Game.callController(controller, GameOver)

    if (snake.eat(food)) {
        Game.pickLocation()
        Game.addScore()
    }

    snake.death()
    snake._update_()
    snake._show_()
    food._show_()

    if (GameOver) {
        Game.setGameOverWindow(DisplayType.block, gameOverWindow)
    }
}

// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//         snake.setDir(0, -1)
//     } else if (keyCode === DOWN_ARROW) {
//         snake.setDir(0, 1)
//     } else if (keyCode === LEFT_ARROW) {
//         snake.setDir(-1, 0)
//     } else if (keyCode === RIGHT_ARROW) {
//         snake.setDir(1, 0)
//     }
// }
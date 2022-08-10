// File name: pakage.js
// This package contains necessary files for games function.

// static namespace
window.Game = new (function () {
    this.pickLocation = (function () {
        let cols = floor(width / Scl)
        let rows = floor(height / Scl)

        food = new Food(createVector(floor(random(cols)), floor(random(rows))), 255, 0, 0)
        food.p5Vector.mult(Scl)
    })

    this.setScore = (function (score) {
        const scoreElement = document.getElementById("score")
        scoreElement.innerText = `Score: ${score}`
    })

    this.addScore = (function () {
        const scoreElement = document.getElementById("score")
        Score++
        scoreElement.innerText = `Score: ${Score}`
    })

    this.checkObjectBounds = (function (object) {
        if (object.x < 0 || object.x > width - Scl) {
            GameOver = true
            scoreField.innerText = `Final Score: ${Score}`
            noLoop()
        } else if (object.y < 0 || object.y > height - Scl) {
            GameOver = true
            scoreField.innerText = `Final Score: ${Score}`
            noLoop()
        }
    })

    this.callController = (function (controller, gameOver = false) {
        if (!gameOver) {
            controller.controlFn()
        }
    })

    this.setGameOverWindow = (function (diplayType, target) {
        target.style.display = diplayType
    })
})

window.DisplayType = new (function () {
    this.hidden = "hidden"
    this.block = "block"
    this.none = "none"
})

// class implementations
window.Snake = (function (color = 0) {
    this.x = 0
    this.y = 0
    this.dx = 1
    this.dy = 0
    this.total = 0
    this.color = color
    this.tail = []

    this._update_ = (function () {
        if (this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1]
            }
        }

        this.tail[this.total - 1] = createVector(this.x, this.y)

        this.x += this.dx * Scl
        this.y += this.dy * Scl

        this.x = constrain(this.x, -1, width - Scl + 1)
        this.y = constrain(this.y, -1, height - Scl + 1)
    })

    this._show_ = (function () {
        fill(this.color)
        stroke(0)

        for (let tailBlock of this.tail) {
            rect(tailBlock.x, tailBlock.y, Scl, Scl)
        }

        rect(this.x, this.y, Scl, Scl)
    })

    this.setDir = (function (dx, dy) {
        this.dx = dx
        this.dy = dy
    })

    this.eat = (function (food) {
        let d = dist(this.x, this.y, food.p5Vector.x, food.p5Vector.y)

        if (d < 1) {
            this.total++
            return true
        }

        return false
    })

    this.death = (function () {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i]
            let d = dist(this.x, this.y, pos.x, pos.y)

            if (d < 1) {
                GameOver = true
                scoreField.innerText = `Final Score: ${Score}`
                noLoop()
            }
        }
    })
})

window.Food = (function (p5Vector, red, green, blue) {
    this.p5Vector = p5Vector
    this.color = red
    this.red = red
    this.blue = blue
    this.green = green

    this._show_ = (function () {
        if (typeof green !== "undefined" && typeof blue !== "undefined") {
            stroke(0)
            fill(this.red, this.green, this.blue)
            rect(this.p5Vector.x, this.p5Vector.y, Scl, Scl)
        } else {
            stroke(0)
            fill(this.color)
            rect(this.p5Vector.x, this.p5Vector.y, Scl, Scl)
        }
    })
})

window.Controller = (function (controlFn) {
    this.controlFn = controlFn
})

// global constants
window.Scl = 20
window.gameOverWindow = document.getElementById("game-over")
window.scoreField = document.getElementById("p-2")
// gobal variables
window.Score = 0
window.GameOver = false

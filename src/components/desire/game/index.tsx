import React from "react";
import Footer from "../../../common/footer";
import Header from "../../../common/header";
import "vex-js/dist/css/vex-theme-wireframe.css";
import "vex-js/dist/css/vex.css";
import "./index.scss";
const vex = require("vex-js");

class Game extends React.Component {
    canvas: any;
    ctx: any;
    ballRadius = 10;
    x = 0;
    y = 0;
    dx = 2;
    dy = -2;
    paddleHeight = 10;
    paddleWidth = 75;
    paddleX = 0;
    rightPressed = false;
    leftPressed = false;
    brickRowCount = 7;
    brickColumnCount = 5;
    brickWidth = 75;
    brickHeight = 20;
    brickPadding = 10;
    brickOffsetTop = 40;
    brickOffsetLeft = 30;
    score = 0;
    lives = 3;
    bricks: any;
    myAni: any;

    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
        document.addEventListener("mousemove", this.mouseMoveHandler, false);

        this.initGame();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler, false);
        document.removeEventListener("keyup", this.keyUpHandler, false);
        document.removeEventListener("mousemove", this.mouseMoveHandler, false);
        cancelAnimationFrame(this.myAni);
    }

    initGame() {

        this.bricks = [];
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        for (let c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
        this.draw();
    }

    keyDownHandler = (e: any) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    };

    keyUpHandler = (e: any) => {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    };

    mouseMoveHandler = (e: any) => {
        let relativeX = e.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    };

    doItAgain(content: string) {
        vex.dialog.confirm({
            message: `${content}, let's do it again!`,
            className: "vex-theme-wireframe",
            callback: (value: boolean) => {
                console.log(value);
                document.location.reload();
                // debugger;
            }
        })
    }

    collisionDetection() {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                let b = this.bricks[c][r];
                if (b.status === 1) {
                    if (
                        this.x > b.x &&
                        this.x < b.x + this.brickWidth &&
                        this.y > b.y &&
                        this.y < b.y + this.brickHeight
                    ) {
                        this.dy = -this.dy;
                        b.status = 0;
                        this.score++;
                        if (
                            this.score ===
                            this.brickRowCount * this.brickColumnCount
                        ) {
                            this.doItAgain('You win, congrats');
                        }
                    }
                }
            }
        }
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#5F5";
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawPaddle() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.paddleX,
            this.canvas.height - this.paddleHeight,
            this.paddleWidth,
            this.paddleHeight
        );
        this.ctx.fillStyle = "#5F5";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawBricks() {
        for (let c = 0; c < this.brickColumnCount; c++) {
            for (let r = 0; r < this.brickRowCount; r++) {
                if (this.bricks[c][r].status === 1) {
                    let brickX =
                        r * (this.brickWidth + this.brickPadding) +
                        this.brickOffsetLeft;
                    let brickY =
                        c * (this.brickHeight + this.brickPadding) +
                        this.brickOffsetTop;
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    this.ctx.beginPath();
                    this.ctx.rect(
                        brickX,
                        brickY,
                        this.brickWidth,
                        this.brickHeight
                    );
                    this.ctx.fillStyle = "#5F5";
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }
    }

    drawScore() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#5F5";
        this.ctx.fillText("Score: " + this.score, 8, 20);
    }
    drawLives() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#5F5";
        this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    }

    draw = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBricks();
        this.drawBall();
        this.drawPaddle();
        this.drawScore();
        this.drawLives();
        this.collisionDetection();

        if (
            this.x + this.dx > this.canvas.width - this.ballRadius ||
            this.x + this.dx < this.ballRadius
        ) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
            if (
                this.x > this.paddleX &&
                this.x < this.paddleX + this.paddleWidth
            ) {
                this.dy = -this.dy;
            } else {
                this.lives--;
                if (!this.lives) {
                    this.doItAgain('Oops');
                } else {
                    this.x = this.canvas.width / 2;
                    this.y = this.canvas.height - 30;
                    this.dx = 3;
                    this.dy = -3;
                    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
                }
            }
        }

        if (
            this.rightPressed &&
            this.paddleX < this.canvas.width - this.paddleWidth
        ) {
            this.paddleX += 7;
        } else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.myAni = requestAnimationFrame(this.draw);
    };

    // TODO animation
    renderHeader() {
        return <Header />;
    }

    renderFooter() {
        return (
            <div>
                <Footer hasBack={true} />
            </div>
        );
    }

    renderCanvas() {
        return (
            <div className="canvas-container">
                <canvas
                    id="myCanvas"
                    ref={(c: any) => {
                        this.canvas = c;
                        this.ctx = c && c.getContext("2d");
                    }}
                    width="640"
                    height="480"
                ></canvas>
            </div>
        );
    }

    render() {
        return (
            <div className="main">
                {this.renderHeader()}
                <div className="main-contontent">
                    {this.renderCanvas()}
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}

export default Game;

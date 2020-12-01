/* Global variables */

var reactionTime;
var minReactionTime = 60000;
var numberOfClicks = 0;

var t0;
var t1;
var nextShape = null;
var ticker = null;
var elapsedTime = 0;


/* Get witdh and heigth of the game board */
var gameBoardWidth = document.getElementById("game-board").offsetWidth;
var gameBoardHeight = document.getElementById("game-board").offsetHeight;

/* We use the Min dimension of the board to set the shape's max and min size */
var boardMinDimension;
if (gameBoardWidth <= gameBoardHeight) {
    boardMinDimension = gameBoardWidth;
}
else {
    boardMinDimension = gameBoardHeight;
}

var shapeMaxSize = Math.floor(boardMinDimension * 0.3);
var shapeMinSize = Math.floor(boardMinDimension * 0.15);


/* Start button */

document.getElementById("start-button").onclick = function () {

    document.getElementById("last-reaction-time").innerHTML = "";
    document.getElementById("best-reaction").innerHTML = "";
    minReactionTime = 60000;
    document.getElementById("number-plays").innerHTML = "";
    numberOfClicks = 0;

    document.getElementById("start-button").style.display = "none";
    
    delayTime = Math.floor(Math.random() * 2000);
    setTimeout(setShape, delayTime);
    setTimeout(timeUp, 30000);
    
    elapsedTime = 0;
    document.getElementById("total-time").innerHTML = elapsedTime;
    ticker = setInterval("tick()", 100);
    tick();
}

/* Click on shape */

document.getElementById("shape").onclick = function () {    
    numberOfClicks += 1;
    document.getElementById("number-plays").innerHTML = numberOfClicks;

    t1 = performance.now();
    reactionTime = t1 - t0;

    document.getElementById("last-reaction-time").innerHTML = reactionTime.toFixed(2) + " ms";

    if (reactionTime < minReactionTime) {
        minReactionTime = reactionTime;
        document.getElementById("best-reaction").innerHTML = minReactionTime.toFixed(2) + " ms";
    }

    document.getElementById("shape").style.display = "none";
    delayTime = Math.floor(Math.random() * 2000);
    nextShape = setTimeout(setShape, delayTime);
      
};

/* This is the function that displays the shape on a random position, and with a random size and color */

function setShape() {
    
    shapeSize = Math.floor(Math.random() * (shapeMaxSize - shapeMinSize + 1)) + shapeMinSize;
    
    document.getElementById("shape").style.width = shapeSize + "px";
    document.getElementById("shape").style.height = shapeSize + "px";
    
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    
    maxMoveX = (gameBoardWidth / 2) - (shapeSize / 2);
    maxMoveY = (gameBoardHeight / 2) - (shapeSize / 2);
    
    moveX = Math.floor(Math.random() * (maxMoveX - (-maxMoveX) + 1)) + (-maxMoveX);
    
    moveY = Math.floor(Math.random() * (maxMoveY - (-maxMoveY) + 1)) + (-maxMoveY);
    
    document.getElementById("shape").style.right = moveX + "px";
    document.getElementById("shape").style.top = moveY + "px";
    
    document.getElementById("shape").style.display = "initial";
    t0 = performance.now();

}

/* Function that returns a random color in string format */

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    
    var color = "#";
    
    for (i = 0; i < 6; i++) {
        newChar = Math.floor(Math.random() * 16);
        color = color + letters[newChar];
    }
    
    return color;
    
}

/* Function called when the time is up */

function timeUp() {
    clearTimeout(nextShape);
    clearInterval(ticker);
    document.getElementById("shape").style.display = "none";
    document.getElementById("time-up").style.display = "initial";
    setTimeout(resetGame, 5000);
}

/* function that resets the game */

function resetGame() {
    document.getElementById("time-up").style.display = "none";    document.getElementById("start-button").style.display = "initial";
}

/* Function that shows the timer */
/* It's executed every 100 miliseconds */

function tick() {
    elapsedTime += 100;
    document.getElementById("total-time").innerHTML = elapsedTime / 1000;
}

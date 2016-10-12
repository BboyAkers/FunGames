var canvasBg = document.getElementById("canvasBg"),
    ctxBg = canvasBg.getContext("2d"),
    canvasEntities = document.getElementById("canvasEntities"),
    ctxEntities = canvasEntities.getContext("2d"),
    canvasWidth = canvasBg.width,
    canvasHeight = canvasBg.height,
    player1 = new Player(),
    //enemies = [],
    //numEnemies = 5,
    //obstacles = [],
    isPlaying = false,
    requestAnimFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        },
    imgSprite = new Image();
imgSprite.src = "images/sprite.png";
imgSprite.addEventListener("load", init, false);


function init() {
    document.addEventListener("keydown",function(e) { checkKey(e,true);}, false);
    document.addEventListener("keyup",function(e) {checkKey(e, false);}, false);
    //defineObstacles();
    //initEnemies();
    begin();
}

function begin() {
    ctxBg.drawImage(imgSprite, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
    isPlaying = true;
    requestAnimFrame(loop);
}

function update(){
    clearCtx(ctxEntities);
    //updateAllEnemies();
    player1.update();
}

function draw() {
    //drawAllEnemies();
    player1.draw();

}


function loop() {
    if(isPlaying) {
        update();
        draw();
        requestAnimFrame(loop);
    }
}

function clearCtx(ctx) {
    ctx.clearRect(0,0, canvasWidth, canvasHeight);
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;

}


function Player() {
    this.srcX = 0;
    this.srcY = 600;
    this.width = 35;
    this.height = 54;
    this.drawX = 400;
    this.drawY = 300;
    this.centerX = this.drawX + (this.width / 2);
    this.centerY = this.drawY + (this.height / 2);
    this.speed = 2;
    this.isLeftKey = false;
    this.isUpKey = false;
    this.isRightKey = false;
    this.isDownKey = false;

    this.isSpacebar = false;
    //this.isShooting = false;
    //var numBullets = 10;
    //this.bullets = [];
    //this.currentBullet = 0;
    // for(var i = 0; i< numBullets; i++) {
    //     this.bullets[this.bullets.length] = new Bullet();
    // }
}

Player.prototype.update = function () {
    this.centerX = this.drawX + (this.width / 2);
    this.centerY = this.drawY + (this.height / 2);
    this.checkDirection();
    //this.checkShooting();
    //this.updateAllBullets();
};

Player.prototype.draw = function () {
    //this.drawAllBullets();
    ctxEntities.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};

Player.prototype.checkDirection = function () {
    var newDrawX = this.drawX,
        newDrawY = this.drawY,
        obstacleCollision = false;
    if(this.isUpKey) {
        newDrawY -= this.speed;
        //Facing North
        this.srcX = 35;
    }
    else if(this.isDownKey) {
        newDrawY += this.speed;
        //Facing South
        this.srcX = 0;
    }
    else if(this.isRightKey) {
        newDrawX += this.speed;
        //Facing East
        this.srcX = 105;
    }
    else if(this.isLeftKey) {
        newDrawX -= this.speed;
        //Facing West
        this.srcX = 70;
    }

    //obstacleCollision = this.CheckObstacleCollide(newDrawX, newDrawY);

    if(!obstacleCollision && !outOfBounds(this, newDrawX, newDrawY)) {
        this.drawX = newDrawX;
        this.drawY = newDrawY;
    }

};

function checkKey(e, value) {
    var keyID = e.keyCode || e.width;

    //Left Arrow
    if(keyID === 37) {
        player1.isLeftKey = value;
        e.preventDefault();
    }

    //Up arrow
    if(keyID === 38) {
        player1.isUpKey = value;
        e.preventDefault();
    }

    //Right Arrow
    if(keyID === 39) {
        player1.isRightKey = value;
        e.preventDefault();
    }

    //Down Arrow
    if(keyID === 40) {
        player1.isDownKey = value;
        e.preventDefault();
    }

    //Spacebar
    if(keyID === 32) {
        player1.isSpacebar = value;
        e.preventDefault();
    }

}
/*
    a = object
    x = drawX(objects X position)
    y = drawY(objects Y position)
*/
function outOfBounds(a, x, y) {
    var newLeftX = x,
        newTopY = y,
        newRightX = x + a.width,
        newBottomY =y + a.height,
        treeLineLeft = 65,
        treeLineTop = 5,
        treeLineRight = 750,
        treeLineBottom = 570;

    return newBottomY > treeLineBottom  ||
            newTopY < treeLineTop       ||
            newRightX > treeLineRight   ||
            newLeftX < treeLineLeft;

}

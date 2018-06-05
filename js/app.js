// Enemies our player must avoid
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
//enemy initial location and speed
    this.x = Math.floor(Math.random()*-400);
    this.speed = Math.floor(Math.random()*(250 - 25)+25);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

//updates enemy location and handles collision with Player
    this.x += this.speed *dt;
    /*console.log(`${this.y} , ${this.x}`) *///changes speed of bugs
    if(this.x > 525){
        this.x = Math.floor(Math.random()*-400);
    }
    this.checkCollisions();
};

//checks collision
Enemy.prototype.checkCollisions = function(){
    if(this.y === player.y){
        if((this.x >= -15 && this.x < 20) && player.x === 0|| 
        (this.x > 60 && this.x < 120) && player.x === 100 ||
        (this.x > 120 && this.x < 220) && player.x === 200 ||
        (this.x > 220 && this.x < 320) && player.x === 300 ||
        (this.x > 320 && this.x < 420) && player.x === 400){
            player.x = 200;
            player.y = 400;
            this.collisionMessage();
    }
    }
}

Enemy.prototype.collisionMessage = function(){
        const collisionPopover = document.querySelector('.collision-popover');
        collisionPopover.style.display = 'inline';
        setTimeout(function(){
            collisionPopover.style.display = 'none';
        }, 500)
}

// Draw the Enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Initiate Player class
let Player = function() {
    this.sprite = 'images/char-horn-girl.png';
//set Player's initial location
    this.x = 200;
    this.y = 400; 
};

Player.prototype.update = function(dt) {
//TODO: updates player location and handles collision

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode){
//TODO: move to the next grid decided by user. can't go off-screen
    if (keyCode === 'left' && this.x > 0){
        this.x -= 100;
        console.log(this.x);
    } else if (keyCode === 'right' && this.x < 400){
        this.x += 100;
        console.log(this.x);
    } else if (keyCode === 'up' && this.y > 0){
        this.y -= 85;
        console.log(this.y);
    } else if (keyCode === 'down' && this.y < 400){
        this.y += 85;
        console.log(this.y);
    }
    //win mode, when player reaches water, reset to initial position
    if (this.y < 0){
        this.x = 200;
        this.y = 400;
        this.winMessage();
        //increase enemy speed function()
    }
}

//Win functionality
Player.prototype.winMessage = function(){
    const messages = ['You did it!', 'Great job!', 'Killer move!'];
    const winPopover = document.querySelector('.win-popover');
    winPopover.textContent = messages[Math.floor(Math.random()*messages.length)];
    winPopover.style.display = "inline";
    setTimeout(function(){
        winPopover.style.display = "none";
    }, 1000);
};


//Instantiate your objects.
//Place all enemy objects in an array called allEnemies
const enemyYPosition = [60, 60, 145, 230];
const allEnemies = [];
enemyYPosition.forEach(function(en){
    let enemy = new Enemy();
    enemy.y = en;
    allEnemies.push(enemy);
});
// Instantiate player
const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
const keyPress = document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //passes value to handleInput();yy
});


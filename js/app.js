// Enemies our player must avoid
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
//TODO: enemy initial location and speed goes here
    this.x = Math.random()*250;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

//TODO: updates enemy location and handles collision with Player
    this.x += Math.floor(Math.random()*(Math.random()*10)); //changes speed of bugs
    if(this.x > 525){
        this.x = -100;
    }
};

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
/*    if(this.x && this.y === enemy.x && enemy.y){
        this.x = 200;
        this.y = 400; 
    }*/
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
        this.y -= 60;
        console.log(this.y);
    } else if (keyCode === 'down' && this.y < 400){
        this.y += 60;
        console.log(this.y);
    }

    //win mode, when player reaches water, reset to initial position
    if (this.y < 0){
        this.x = 200;
        this.y = 400;
        //add point pop up ()
    }
}

//Instantiate your objects.
//Place all enemy objects in an array called allEnemies
const enemyYPosition = [60, 60, 140, 220, 220];
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
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //passes value to handleInput();yy
});


//TODO: win functionality
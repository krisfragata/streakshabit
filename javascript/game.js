const Game = function() {

  this.world = {

    background_color:"rgba(197, 147, 90, 0.25)",

    friction:0.9,
    gravity:3,

    player:new Game.Player(),

    height:72,
    width:128,

    collideObj:function(obj) {

      if (obj.x < 0) { obj.x = 0; obj.velocityX = 0; }
      else if (obj.x + obj.width > this.width) { obj.x = this.width - obj.width; obj.velocityX = 0; }
      if (obj.y < 0) { obj.y = 0; obj.velocityY = 0; }
      else if (obj.y + obj.height > this.height) { obj.jumping = false; obj.y = this.height - obj.height; obj.velocityY = 0; }

    },

    update:function() {

      this.player.velocityY += this.gravity;
      this.player.update();

      this.player.velocityX *= this.friction;
      this.player.velocityY *= this.friction;

      this.collideObj(this.player);

    }

  };

  this.update = function() {

    this.world.update();

  };

};

Game.prototype = { constructor : Game };

Game.Player = function(x, y) {

  this.color      = "#473d71";
  this.height     = 10;
  this.jumping    = true;
  this.velocityX = 0;
  this.velocityY = 0;
  this.width      = 8;
  this.x          = 100;
  this.y          = 20;

};

Game.Player.prototype = {

  constructor : Game.Player,

  jump:function() {

    if (!this.jumping) {

      this.color = "#" + Math.floor(Math.random() * 16777216).toString(16);// Change to random color
      /* toString(16) will not add a leading 0 to a hex value, so this: #0fffff, for example,
      isn't valid. toString would cut off the first 0. The code below inserts it. */
      if (this.color.length != 7) {

        this.color = this.color.slice(0, 1) + "0" + this.color.slice(1, 6);

      }

      this.jumping     = true;
      this.velocityY -= 20;

    }

  },

  moveLeft:function()  { this.velocityX -= 0.5; },
  moveRight:function() { this.velocityX += 0.5; },

  update:function() {

    this.x += this.velocityX;
    this.y += this.velocityY;

  }

};
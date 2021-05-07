// Frank Poth 03/09/2018

/* The keyDownUp handler was moved to the main file. */

const Controller = function() {

  this.left  = new Controller.ButtonInput();
  this.right = new Controller.ButtonInput();
  this.up    = new Controller.ButtonInput();

  this.keyDownUp = function(type, keyCode) {

    var down = (type == "keydown") ? true : false;

    switch(keyCode) {

      case 65: this.left.getInput(down);  break;
      case 32: this.up.getInput(down);    break;
      case 68: this.right.getInput(down);
    }

  };

};

Controller.prototype = {

  constructor : Controller

};

Controller.ButtonInput = function() {

  this.active = this.down = false;

};

Controller.ButtonInput.prototype = {

  constructor : Controller.ButtonInput,

  getInput : function(down) {

    if (this.down != down) this.active = down;
    this.down = down;

  }

};
window.addEventListener("load", function(event) {

    "use strict";
  
        ///////////////////
      //// FUNCTIONS ////
    ///////////////////
  
    let render = function() {
  
      display.renderColor(game.color);
      display.render();
  
    };
  
    var update = function() {
  
      game.update();
  
    };
  
          /////////////////
        //// OBJECTS ////
      /////////////////
  
      /* Usually I just write my logical sections into object literals, but the temptation
      to reference one inside of another is too great, and leads to sloppy coding.
      In an effort to attain cleaner code, I have written classes for each section
      and instantiate them here. */
  
      /* The controller handles user input. */
      let controller = new Controller();
      /* The display handles window resizing, as well as the on screen canvas. */
      let display    = new Display(document.querySelector("canvas"));
      /* The game will eventually hold our game logic. */
      let game       = new Game();
      /* The engine is where the above three sections can interact. */
      let engine     = new Engine(1000/30, render, update);
  
          ////////////////////
        //// INITIALIZE ////
      ////////////////////
  
      window.addEventListener("resize",  display.handleResize);
      window.addEventListener("keydown", controller.handleKeyDownUp);
      window.addEventListener("keyup",   controller.handleKeyDownUp);
  
      display.resize();
      engine.start();
  
  });
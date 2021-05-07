$(document).ready(()=>{

  
  window.addEventListener("load", function(event) {

    "use strict";
  
    // variables
    const start = document.querySelector('#startGameBtn');
    const prompt = document.querySelector('.prompt')



      start.addEventListener('click', ()=>{
        // hides menu when start button is clicked
        prompt.style.display = 'none';


        let keyDownUp = (event) => {
        controller.keyDownUp(event.type, event.keyCode);
        };
  
    
        let resize = function(event) {

        display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
        display.render();
    
        };

        function render(){
      
          display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
          display.render();
      
        };
    
        function render() {
      
          display.fill(game.world.background_color);// Clear background to game's background color.
          display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
          display.render();
      
        };
  
        function update() {
    
        if (controller.left.active)  { game.world.player.moveLeft();  }
        if (controller.right.active) { game.world.player.moveRight(); }
        if (controller.up.active)    { game.world.player.jump(); controller.up.active = false; }
    
        game.update();
    
          };

        //// OBJECTS ////
        let controller = new Controller();
        let display    = new Display(document.querySelector("canvas"));
        let game       = new Game();
        let engine     = new Engine(1000/30, update, render);

           /* This is very important. The buffer canvas must be pixel for pixel the same
        size as the world dimensions to properly scale the graphics. All the game knows
        are player location and world dimensions. We have to tell the display to match them. */
        display.buffer.canvas.height = game.world.height;
        display.buffer.canvas.width = game.world.width;
      
         //// INITIALIZE ////
      
        window.addEventListener("keydown", keyDownUp);
        window.addEventListener("keyup",   keyDownUp);
        window.addEventListener("resize",  resize);

        resize();
  
        engine.start();


      })

        
  
  });
});

// create Shape
var randomShape = new Shape();

// Create background

var bg = new PIXI.Graphics();
bg.beginFill(0x000000);
bg.drawRect(0, 0, 800, 600);
var textureBg = bg.generateTexture();
var spriteBg = new PIXI.Sprite(textureBg);
spriteBg.interactive = true;
app.stage.addChild(spriteBg);

//  onClick area create Shape
spriteBg.click = function (event) {

  var x = event.data.global.x,
    y = event.data.global.y;

  randomShape.createShape(x, y);
};

// Reference to the renderer's screen rectangle
var tickCount = 0;

app.ticker.add(function () {

  tickCount += 0.5;


  if (tickCount == 60) {
    createShapesAmount(shapesAmount);
  }
  gameLoop(gravityAmount);
  if (tickCount == 61) {
    tickCount = 1;
  }

});




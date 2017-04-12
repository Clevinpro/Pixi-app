var app = new PIXI.Application(800, 600, {antialias: true});
document.querySelector('.view').appendChild(app.view);

app.stage.interactive = true;

var shapesArr = [];

function Shape() {
  this.shapeArea = 0;
}

Shape.prototype.allAreas = 0;
Shape.prototype.shapesCounter = 0;

// Reset All Shape's area
Shape.prototype.resetArea = function() {
  return this.allAreas = 0;
};

// Calculate Polygon's area
Shape.prototype.polygonArea = function(pX, pY, numPoints) {
  var area = 0;         // Accumulates area in the loop
  var j = numPoints - 1;  // The last vertex is the 'previous' one to the first

  for (var i = 0; i < numPoints; i++) {
    area = area + (pX[j] + pY[i]) * (pY[j] - pY[i]);
    j = i;  //j is previous vertex to i
  }
  return Math.floor(area / 2 * -1);
};

// Calculate Circle's area
Shape.prototype.circleArea = function(radius) {
  var area = Math.floor(Math.PI * radius * radius);
  return area;
};

// Calculate  Ellipse's area
Shape.prototype.ellipseArea = function(width, height) {
  var area = Math.floor(Math.PI * height * width);
  return area;
};


// Create random Shape
Shape.prototype.createShape = function (x, y) {
  var self = this;


  var randomX = (685 - 20) * Math.random() + 20,
      newX = x == randomX ?  (640 - 20) * Math.random() + 20 : x,
      color = Math.random() * 0xFFFFFF;
  this.shapesCounter++;
  setShapesCounter();


  var i = (7 - 1) * Math.random() + 1,
      graphics = new PIXI.Graphics(),
      textureGraphics,
      spriteGraphics,
      pX,
      pY,
      numPoints,
      newArea;


  if (i <= 1) {
    graphics.beginFill(this.color, 0.5);
    graphics.lineStyle(5, 0xFFFFFF, 0.8);
    graphics.drawCircle(0, 0, 65);
    graphics.endFill();
    textureGraphics = circle.generateTexture();
    spriteGraphics = new PIXI.Sprite(textureGraphics);
    spriteGraphics.y = y;
    spriteGraphics.x = newX;
    spriteGraphics.interactive = true;
    var radius = 65;
    this.shapeArea = this.circleArea(radius);
    shapesArr.push(spriteGraphics);
    app.stage.addChild(spriteGraphics);
    spriteGraphics.click = function (e) {
      self.allAreas = self.allAreas - self.shapeArea;
     setAllArea();
      app.stage.removeChild(spriteGraphics);
    };
  } else if (i > 1 && i <= 2) {
    graphics.beginFill(color, 0.5);
    graphics.lineStyle(5, 0xFFFFFF, 0.8);
    graphics.drawRect(0, 0, 100, 115);
    graphics.endFill();
    textureRectangle = graphics.generateTexture();
    spriteRectangle = new PIXI.Sprite(textureRectangle);
    spriteRectangle.y = y;
    spriteRectangle.x = newX;
    pX = [100, 200, 200, 100];
    pY = [100, 100, 215, 215];
    numPoints = pX.length;
    this.shapeArea = this.polygonArea(pX, pY, numPoints);
    newArea = this.polygonArea(pX, pY, numPoints);
    spriteRectangle.interactive = true;
    shapesArr.push(spriteRectangle);
    app.stage.addChild(spriteRectangle);
    spriteRectangle.click = function (e) {
      self.allAreas = self.allAreas - newArea;
     setAllArea();
      app.stage.removeChild(spriteRectangle);
    };

  } else if (i > 2 && i <= 3) {
    graphics.beginFill(color, 0.5);
    graphics.lineStyle(5, 0xFFFFFF, 0.8);
    graphics.moveTo(100, 100);
    graphics.lineTo(150, 100);
    graphics.lineTo(175, 125);
    graphics.lineTo(175, 175);
    graphics.lineTo(150, 200);
    graphics.lineTo(100, 200);
    graphics.lineTo(75, 175);
    graphics.lineTo(75, 125);
    graphics.endFill();
    textureGraphics= graphics.generateTexture();
    spriteGraphics = new PIXI.Sprite(textureGraphics);
    spriteGraphics.y = y;
    spriteGraphics.x = newX;
    spriteGraphics.interactive = true;
    shapesArr.push(spriteGraphics);
    pX = [100, 150, 175, 175, 150, 100, 75];
    pY = [100, 100, 125, 175, 200, 200, 175];
    numPoints = pX.length;
    this.shapeArea = this.polygonArea(pX, pY, numPoints, spriteGraphics);
    newArea = this.polygonArea(pX, pY, numPoints, spriteGraphics);
    app.stage.addChild(spriteGraphics);
    spriteGraphics.click = function (e) {
      self.allAreas = self.allAreas - newArea;
      setAllArea();
      app.stage.removeChild(spriteGraphics);
    };
  }
  else if (i > 3 && i <= 4) {
    graphics.beginFill(color, 0.5);
    graphics.lineStyle(5, 0xFFFFFF, 0.8);
    graphics.moveTo(100, 150);
    graphics.lineTo(150, 50);
    graphics.lineTo(175, 150);
    graphics.lineTo(100, 150);
    graphics.endFill();
    textureGraphics = graphics.generateTexture();
    spriteGraphics = new PIXI.Sprite(textureGraphics);
    spriteGraphics.y = y;
    spriteGraphics.x = newX;
    spriteGraphics.interactive = true;
    shapesArr.push(spriteGraphics);
    pX = [100, 150, 175];
    pY = [150, 50, 150];
    numPoints = pX.length;
    this.shapeArea = this.polygonArea(pX, pY, numPoints);
    newArea = this.polygonArea(pX, pY, numPoints);
    console.log('triangle', newArea);
    app.stage.addChild(spriteGraphics);
    spriteGraphics.click = function (e) {
      self.allAreas = self.allAreas - newArea;
     setAllArea();
      app.stage.removeChild(spriteGraphics);
    };


  }else if (i > 4 && i <= 5) {
    newX = x == randomX ?  (600 - 20) * Math.random() + 20 : x;
    graphics.beginFill(color, 0.5);
    graphics.lineStyle(5, 0xFFFFFF, 0.8);
    graphics.drawEllipse(0, 0, 60, 35);
    graphics.endFill();
    textureGraphics = graphics.generateTexture();
    spriteGraphics = new PIXI.Sprite(textureGraphics);
    spriteGraphics.y = y;
    spriteGraphics.x = newX;
    spriteGraphics.interactive = true;
    shapesArr.push(spriteGraphics);
    var width = 60;
    var height = 35;
    this.shapeArea = this.ellipseArea(width, height);
    newArea = this.ellipseArea(width, height);
    app.stage.addChild(spriteGraphics);
    spriteGraphics.click = function (e) {
      self.allAreas = self.allAreas - newArea;
     setAllArea();
      app.stage.removeChild(spriteGraphics);
    };


  } else if (i > 5 && i <= 6) {
    graphics.beginFill(color, 0.5);
    graphics.lineStyle(5, 0xFFFFFF, 0.8);
    graphics.drawPolygon([550, 100, 630, 155, 600, 250, 500, 250,  470, 155, 550, 100]);
    graphics.endFill();
    textureGraphics = graphics.generateTexture();
    spriteGraphics = new PIXI.Sprite(textureGraphics);
    spriteGraphics.y = y;
    spriteGraphics.x = newX;
    spriteGraphics.interactive = true;
    shapesArr.push(spriteGraphics);
    pX = [550, 630, 600, 500, 470];
    pY = [100, 155, 250, 250, 155];
    numPoints = pX.length;
    this.shapeArea = this.polygonArea(pX, pY, numPoints);
    newArea = this.polygonArea(pX, pY, numPoints);
    app.stage.addChild(spriteGraphics);
    spriteGraphics.click = function (e) {
      self.allAreas = self.allAreas - newArea;
     setAllArea();
      app.stage.removeChild(spriteGraphics);
    };


  } else if (i > 6 && i <= 7) {
    graphics.beginFill(color, 0.5);
    graphics.moveTo(220, 220);
    graphics.quadraticCurveTo(260, 240, 280, 220);
    graphics.lineTo(280, 220);
    graphics.quadraticCurveTo(316, 240, 340, 220);
    graphics.lineTo(340, 220);
    graphics.quadraticCurveTo(376, 240, 400, 220);
    graphics.lineTo(400, 220);
    graphics.quadraticCurveTo(440, 200, 400, 180);
    graphics.lineTo(400, 180);
    graphics.quadraticCurveTo(380, 160, 340, 180);
    graphics.lineTo(340, 180);
    graphics.quadraticCurveTo(310, 160, 280, 180);
    graphics.lineTo(280, 180);
    graphics.quadraticCurveTo(240, 160, 220, 180);
    graphics.lineTo(220, 180);
    graphics.quadraticCurveTo(185, 200, 220, 220);
    graphics.endFill();
    textureGraphics= graphics.generateTexture();
    spriteGraphics = new PIXI.Sprite(textureGraphics);
    spriteGraphics.y = y;
    spriteGraphics.x = newX;
    spriteGraphics.interactive = true;
    shapesArr.push(spriteGraphics);
    pX = [220, 260, 280, 316, 340, 376, 400, 440, 400, 380, 340, 310, 280, 240, 220, 185];
    pY = [220, 240, 220, 240, 220, 240, 220, 200, 180, 160, 180, 160, 180, 160, 180, 200];
    numPoints = pX.length;
    this.shapeArea = this.polygonArea(pX, pY, numPoints) * -1;
    newArea = this.polygonArea(pX, pY, numPoints) * -1;
    app.stage.addChild(spriteGraphics);
    console.log('clouds', newArea);
    spriteGraphics.click = function (e) {
      self.allAreas = self.allAreas - newArea;
     setAllArea();
      app.stage.removeChild(spriteGraphics);
    };
  }

  this.allAreas += this.shapeArea;
  console.log(shapesArr);
  //set All Shape's Area
  setAllArea();
};



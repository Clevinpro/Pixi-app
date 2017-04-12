/**
 * Created by Clevin on 25.03.2017.
 */

// set  shapes value
var shapesAmount = 3,
    gravityAmount = 5;

//  Amount of shapes creation

function createShapesAmount (amount) {
  var id = 1,
    newAmount = amount ? amount : 1,
    x = 0,
    y = 0;
    Shape.allAreas = 0;
    randomShape.resetArea();

  while (id <= newAmount) {
    id++;
    x = (620 - 80) * Math.random() + 80;
    randomShape.createShape(x, y);
  }
}

// Render shapes & clean

function gameLoop (gravityAmount) {
  shapesArr.forEach(function (item) {
    item.y += gravityAmount;
  });

  for (var i = 0; i < shapesArr.length; i++) {
    if (shapesArr[i].y > 600) {
      shapesArr.splice(i, 1);
      allAreas = 0;
    }
  }
}


// set shapes counter

setShapesCounter = function () {
  return document.querySelector('.shapes__value strong').innerHTML = randomShape.shapesCounter;
};

// set all shapes areas

setAllArea = function () {
  return document.querySelector('.shapes__area strong').innerHTML = randomShape.allAreas;
};

// set  shapes amount value

document.querySelector('.shapes__buttons .left').onclick = function () {
  if (shapesAmount > 1) {
    shapesAmount--;
    console.log(shapesAmount);
    document.querySelector('.shapes__buttons .button__value').innerHTML = shapesAmount;
  }
};

document.querySelector('.shapes__buttons .right').onclick = function () {
  if (shapesAmount >= 1 && shapesAmount < 7) {
    shapesAmount++;
    console.log(shapesAmount);
    document.querySelector('.shapes__buttons .button__value').innerHTML = shapesAmount;
  }
};

// set  gravity value

document.querySelector('.gravity__buttons .left').onclick = function () {
  if (gravityAmount > 5 ) {
    gravityAmount -= 5;
    console.log(gravityAmount);
    document.querySelector('.gravity__buttons .button__value').innerHTML = gravityAmount;
  }
};

document.querySelector('.gravity__buttons .right').onclick = function () {
  if (gravityAmount >= 5 && gravityAmount < 20) {
    gravityAmount += 5;
    console.log(gravityAmount);
    document.querySelector('.gravity__buttons .button__value').innerHTML = gravityAmount;
  }
};
(function(){
'use strict';
var MINIMUM_WIDTH_HEIGHT = 1;
var MAXIMUM_WIDTH_HEIGHT = 140;
var MINIMUM_COORDINATES = 0;
var MAXIMUM_COORDINATES = 700;
var MINIMUM_RGB = 0;
var MAXIMUM_RGB = 255;
var INTERVAL_MILLISECONDS = 500;

setInterval (animationInterval, INTERVAL_MILLISECONDS);

function animationInterval(){
  var theElement = document.querySelector("#unique");
  theElement.style.backgroundColor = randomizeBackgroundColor();
  theElement.style.width =
    buildPixelValue(
      getRandomNumber(MINIMUM_WIDTH_HEIGHT, MAXIMUM_WIDTH_HEIGHT)
    );
  theElement.style.height =
    buildPixelValue(
      getRandomNumber(MINIMUM_WIDTH_HEIGHT, MAXIMUM_WIDTH_HEIGHT)
    );
  theElement.style.left =
    buildPixelValue(
      getRandomNumber(MINIMUM_COORDINATES, MAXIMUM_COORDINATES)
    );
  theElement.style.top =
    buildPixelValue(
      getRandomNumber(MINIMUM_COORDINATES, MAXIMUM_COORDINATES)
    );
}

function getRandomNumber(min, max){
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function randomizeBackgroundColor(){
  var r = getRandomNumber(MINIMUM_RGB, MAXIMUM_RGB);
  var g = getRandomNumber(MINIMUM_RGB, MAXIMUM_RGB);
  var b = getRandomNumber(MINIMUM_RGB, MAXIMUM_RGB);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function buildPixelValue(numericValue){
  return numericValue + 'px';
}
}());

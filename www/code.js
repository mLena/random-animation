
setInterval (function(){ myDiv()}, 500);
function myDiv(){
  var min = 1;
  var max = 140;
  var minimum = 0;
  var maximum = 255;
  var minP = 0;
  var maxP = 800;
  var theElement = document.querySelector("#unique");
  var r = (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  var g = (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  var b = (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  theElement.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  theElement.style.width = (Math.floor(Math.random() * (max - min + 1)) + min) + 'px';
  theElement.style.height = (Math.floor(Math.random() * (max - min + 1)) + min) + 'px';
  theElement.style.left = (Math.floor(Math.random() * (maxP - minP + 1)) + minP) + 'px';
  theElement.style.top = (Math.floor(Math.random() * (maxP - minP + 1)) + minP) + 'px';
}

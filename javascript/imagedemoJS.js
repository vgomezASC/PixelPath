var canvas;
var context;
window.onload = function() {
  canvas = document.getElementById("MyCanvas");
  context = canvas.getContext("2d");
  //var image = document.getElementById("image");
  var image = new Image();
  //image.src = "generic_image.png";

  image.onload = function(){
    context.drawImage(image,10,10);
  }
    image.src = "images/header.jpg";
};

function conversion(){
  var imageData = context.getImageData(100,105,1,1).data;
  console.log(imageData);
}

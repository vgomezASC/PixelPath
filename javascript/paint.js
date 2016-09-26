var finalarr = [];
var coordinatesarr = [];

window.onload = function() {
var canv = document.getElementById("MyCanvas");
var corl = document.getElementById("MyColors");
var ctx = canv.getContext('2d');
var corl2 = corl.getContext('2d');
var paint = false;
var rect = canvas.getBoundingClientRect();
var rect2 = corl.getBoundingClientRect();
var tempcords = [];
var currarr = [];
	
// box Ind = 1
corl2.fillStyle = "#FF0000";
corl2.fillRect(30, 5, 20, 20);
// box Ind = 2
corl2.fillStyle = "#FF00E0";
corl2.fillRect(100, 5, 20, 20);
// box Ind = 3
corl2.fillStyle = "#00FF00";
corl2.fillRect(160,5,20,20);
//box Ind = 3
corl2.fillStyle = "#0F00FF";
corl2.fillRect(230,5,20,20);

$('#MyColors').mousedown(function(e) {
	var mouseX2 = e.clientX - rect2.left;
	var mouseY2 = e.clientY - rect2.top;
	console.log("x" + mouseX2);
	console.log("y" + mouseY2);
  if(mouseY2 >= 5 && mouseY2 <= 25){
    if(mouseX2 >= 30 && mouseX2 <= 50) {
      ctx.strokeStyle = "#FF0000"; 
    } else if(mouseX2 >= 100 && mouseX2 <= 120) {
      ctx.strokeStyle = "#FF00E0";
    } else if(mouseX2 >= 160 && mouseX2 <= 180) {
      ctx.strokeStyle = "#00FF00";
    } else if (mouseX2 >= 230 && mouseX2 <= 250) {
      ctx.strokeStyle = "#0F00FF";
    }
  }
});
			 
$('#MyCanvas').mousedown(function(e) {
	paint = true;
	var mouseX = e.clientX - rect.left;
	var mouseY = e.clientY - rect.top;
	
	
	ctx.beginPath();
});

$('#MyCanvas').mousemove(function(e) {
	if(paint) {
		var mouseX = e.clientX - rect.left;
		var mouseY = e.clientY - rect.top;
		//var data = ctx.getImageData(mouseX,mouseY,1,1).data;
		//console.log(ctx.getImageData(mouseX,mouseY,1,1).data);
		tempcords.push([mouseX, mouseY]);
		currarr.push(ctx.getImageData(mouseX,mouseY,1,1).data);
		ctx.lineTo(mouseX, mouseY);
		ctx.stroke();
	}
});
	
$('#MyCanvas').mouseout(function(e) {
	if(paint) {
		finalarr.push(currarr);
		coordinatesarr.push(tempcords);
	}
	console.log(finalarr);
	currarr = [];
	tempcords = [];
	paint = false;
});

$('#MyCanvas').mouseup(function(e) {
	if(paint) {
		finalarr.push(currarr);
		coordinatesarr.push(tempcords);
	}
	console.log(finalarr);
	currarr = [];
	paint = false;
});
}

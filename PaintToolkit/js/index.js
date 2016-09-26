var canv = document.getElementById("canv");
var ctx = canv.getContext('2d');
var paint = false;

$('#canv').mousedown(function(e) {
	paint = true;
	var mouseX = e.pageX - this.offsetLeft;
	var mouseY = e.pageY - this.offsetTop;
  if(mouseX >= 0 && mouseX <= 20){
    if(mouseY >= 0 && mouseY <= 20) {
      ctx.strokeStyle = "#FF0000"; 
    } else if(mouseY >= 20 && mouseY <= 40) {
      ctx.strokeStyle = "#FF00E0";
    } else if(mouseY >= 40 && mouseY <= 60) {
      ctx.strokeStyle = "#00FF00";
    } else if (mouseY >= 40 && mouseY <= 80) {
      ctx.strokeStyle = "#0F00FF";
    }
  }
	ctx.beginPath();
});

$('#canv').mousemove(function(e) {
	if(paint) {
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		ctx.lineTo(mouseX, mouseY);
		ctx.stroke();
	}
});

$('#canv').mouseup(function(e) {
	paint = false;
});

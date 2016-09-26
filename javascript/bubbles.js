function bubbles() {
  var canv = document.getElementById("MyCanvas");
  var ctx = canv.getContext('2d');
  for(var line = 0; line < coordinatesarr.length; line++) {
    ctx.beginPath();
    ctx.fillStyle = "cyan";
    console.log(line);
    console.log(coordinatesarr[line][0][0]);
    console.log(coordinatesarr[line][0][0]);
    ctx.arc(coordinatesarr[line][0][0], coordinatesarr[line][0][1], 5, 0, Math.PI*2);
    ctx.fill();
  }
}

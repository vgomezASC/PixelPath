function sound(){
  var canv = document.getElementById("MyCanvas");
  var ctx = canv.getContext('2d');
  var sum;
  var speed = 1;
  var audio;
  var notes = 12;
  for (var x = 0; x < finalarr.length; x++)
  {
    /*ctx.beginPath();
    ctx.arc(coordinatesarr[x][0][0], coordinatesarr[x][0][1], 5, 0, 2*Math.PI);
    ctx.fillStyle = "cyan";
    ctx.fill();*/
    for(var y = 0; y < finalarr[x].length; y++)
    {
      sum = finalarr[x][y][0] + finalarr[x][y][1] + finalarr[x][y][2];
      switch(true){
        case(sum < 3 * 255 / notes):
          audio = new Audio('Sounds/sound/I.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 1;
          break;
        case(sum < 3 * 255 / (notes - 1)):
          audio = new Audio('Sounds/sound/II.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 2;
          break;
        case(sum < 3 * 255 / (notes - 2)):
          audio = new Audio('Sounds/sound/III.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 3;
          break;
        case(sum < 3 * 255 / (notes - 3)):
          audio = new Audio('Sounds/sound/IIIb.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 4;
          break;
        case(sum < 3 * 255 / (notes - 4)):
          audio = new Audio('Sounds/sound/IV.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 5;
          break;
        case(sum < 3 * 255 / (notes - 5)):
          audio = new Audio('Sounds/sound/V.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 6;
          break;
        case(sum < 3 * 255 / (notes - 6)):
          audio = new Audio('Sounds/sound/VI.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 7;
          break;
        case(sum < 3 * 255 / (notes - 7)):
          audio = new Audio('Sounds/sound/VII.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 8;
          break;
        case(sum < 3 * 255 / (notes - 8)):
          audio = new Audio('Sounds/sound/VIII.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 9;
          break;
        case(sum < 3 * 255 / (notes - 9)):
          audio = new Audio('Sounds/sound/VIIb.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 10;
          break;
        case(sum < 3 * 255 / (notes - 10)):
          audio = new Audio('Sounds/sound/VIb.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 11;
          break;
        case(sum < 3 * 255 / (notes - 11)):
          audio = new Audio('Sounds/sound/Vb.wav');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 12;
      }
    }
  }
}

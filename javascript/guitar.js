function guitar(){
  var canv = document.getElementById("MyCanvas");
  var ctx = canv.getContext('2d');
  var sum;
  var notes = 12;
  var speed = 1;
  var audio;
  for (var x = 0; x < finalarr.length; x++)
  {
    for(var y = 0; y < finalarr[x].length; y++)
    {
      sum = finalarr[x][y][0] + finalarr[x][y][1] + finalarr[x][y][2];
      switch(true){
        case(sum < 3 * 255 / notes):
          audio = new Audio('Sounds/guitar/1st_String_E_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 1;
          break;
        case(sum < 3 * 255 / (notes - 1)):
          audio = new Audio('Sounds/guitar/2nd_String_B__64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 2;
          break;
        case(sum < 3 * 255 / (notes - 2)):
          audio = new Audio('Sounds/guitar/3rd_String_G_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 3;
          break;
        case(sum < 3 * 255 / (notes - 3)):
          audio = new Audio('Sounds/guitar/4th_String_D_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 4;
          break;
        case(sum < 3 * 255 / (notes - 4)):
          audio = new Audio('Sounds/guitar/5th_String_A_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 5;
          break;
        case(sum < 3 * 255 / (notes - 5)):
          audio = new Audio('Sounds/guitar/6th_String_E_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 6;
          break;
        case(sum < 3 * 255 / (notes - 6)):
          audio = new Audio('Sounds/guitar/C_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 7;
          break;
        case(sum < 3 * 255 / (notes - 7)):
          audio = new Audio('Sounds/guitar/D_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 8;
          break;
        case(sum < 3 * 255 / (notes - 8)):
          audio = new Audio('Sounds/guitar/Dm_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 9;
          break;
        case(sum < 3 * 255 / (notes - 9)):
          audio = new Audio('Sounds/guitar/E_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 10;
          break;
        case(sum < 3 * 255 / (notes - 10)):
          audio = new Audio('Sounds/guitar/2nd_String_B__64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 11;
          break;
        case(sum < 3 * 255 / (notes - 11)):
          audio = new Audio('Sounds/guitar/1st_String_E_64kb.mp3');
          audio.playbackRate = speed * .08;
          audio.play();
          speed = 12;
      }
    }
  }
}

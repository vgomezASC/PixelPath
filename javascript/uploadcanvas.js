var image = new Image();
var canvas;
var context;
$(function () {
       canvas = document.getElementById("MyCanvas");
       context = canvas.getContext("2d");
       image.onload = function(){
    context.drawImage(image,10,10,canvas.width, canvas.height);
  }
       $(":file").change(function () {
              if (this.files && this.files[0]) {
                     var reader = new FileReader();
                     var url;
                     reader.onload = function() { 
                        //url = reader.readAsDataURL(this.files[0]);  
                        url = reader.result;
                        //console.log("blobs");
                        //console.log(url);
                        image.src = reader.result;
                     };
                     reader.readAsDataURL(this.files[0]);
                     
                     //console.log(url);
                     //image.src = "images/space.jpg";
               }
       });
     
       function imageIsLoaded(e) {
              context.drawImage(image,10,10);
              
       };
});

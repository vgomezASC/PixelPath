var image = new Image();
                $(function () {
              $(":file").change(function () {
                  if (this.files && this.files[0]) {
                      var reader = new FileReader();
                      reader.onload = imageIsLoaded;
                      image = reader.readAsDataURL(this.files[0]);
                  }
              });
          });
          function imageIsLoaded(e) {
                window.onload = function() {
                  var = canvas = document.getElementById("MyCanvas");
                  var = context = canvas.getContext("2d");
             image.onload = function(){context.drawImage(image,10,10);}
                }
          };

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


    var img = new Image();
    img.src = "img/apple.png";  

    img.onload = function() {
        context.drawImage(img, 75, 70, 100, 100);  // nariše sliko v kot (0,0)
    };
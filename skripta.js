var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


    var img = new Image();
    img.src = "img/apple.png";  // ali "slika.svg" / "slika.png"

    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);  // nariše sliko v kot (0,0)
    };
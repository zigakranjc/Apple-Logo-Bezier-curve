window.onload = function(){
var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");

	   var scale = 0.075;
    	ctx.scale(scale, scale);

      ctx.lineWidth=3;
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";

      ctx.beginPath();
      ctx.moveTo(937, 279);
      ctx.bezierCurveTo(876, 278, 733, 355, 750, 499);

      ctx.moveTo(750, 498);
      ctx.bezierCurveTo(901, 494, 948, 337, 935, 280);

      ctx.moveTo(864, 1205);
      ctx.bezierCurveTo(807, 1174, 745, 1164, 670, 1207);
      ctx.bezierCurveTo(638, 1223, 588, 1227, 559, 1203);
      ctx.bezierCurveTo(281, 966, 311, 454, 656, 516);
      ctx.bezierCurveTo(797, 572, 745, 550, 835, 525);
      ctx.bezierCurveTo(903, 492, 1046, 502, 1105, 603);
      ctx.bezierCurveTo(988, 660, 951, 881, 1128, 968);
      ctx.bezierCurveTo(1101, 1046, 1008, 1278, 864, 1205);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();
    };

    window.onload = function(){
var canvas = document.getElementById("screen");
var ctx= canvas.getContext("2d");

	   var scale = 0.075;
    	ctx.scale(scale, scale);

      ctx.lineWidth=3;
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";

      ctx.beginPath();
      ctx.moveTo(937, 279);
      ctx.bezierCurveTo(876, 278, 733, 355, 750, 499);

      ctx.moveTo(750, 498);
      ctx.bezierCurveTo(901, 494, 948, 337, 935, 280);

      ctx.moveTo(864, 1205);
      ctx.bezierCurveTo(807, 1174, 745, 1164, 670, 1207);
      ctx.bezierCurveTo(638, 1223, 588, 1227, 559, 1203);
      ctx.bezierCurveTo(281, 966, 311, 454, 656, 516);
      ctx.bezierCurveTo(797, 572, 745, 550, 835, 525);
      ctx.bezierCurveTo(903, 492, 1046, 502, 1105, 603);
      ctx.bezierCurveTo(988, 660, 951, 881, 1128, 968);
      ctx.bezierCurveTo(1101, 1046, 1008, 1278, 864, 1205);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();
    };
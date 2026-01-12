window.onload = function(){
var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");

    // Originalna velikost risbe
    const originalWidth = 1200;   // največji X v tvojih koordinatah
    const originalHeight = 1300;  // največji Y v tvojih koordinatah

    // Retina zaslon
    const ratio = window.devicePixelRatio || 1;

    // Nastavimo velikost canvas-a
    canvas.width = originalWidth * ratio;
    canvas.height = originalHeight * ratio;

    // CSS za prikaz canvas-a znotraj iphone-screen
    canvas.style.width = "280px";    // iphone-screen width
    canvas.style.height = "580px";   // iphone-screen height

    ctx.scale(ratio, ratio); // za ostro risbo na retina

      ctx.lineWidth=3;
      ctx.fillStyle = "black";
      ctx.strokeStyle = "black";

      function drawPath() {
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
    }
  
    // === ANIMACIJA RISANJA ===
    const dashLength = 3000;
    let dashOffset = dashLength;
    let state = "draw"; // draw | hold | reset
  
    ctx.setLineDash([dashLength]);
  
    function animate() {
      if (state === "draw") {
        ctx.clearRect(0, 0, originalWidth, originalHeight);
        drawPath();
  
        ctx.lineDashOffset = dashOffset;
        ctx.stroke();
  
        dashOffset -= 25;
  
        if (dashOffset <= 0) {
          ctx.setLineDash([]);
          ctx.fill();
          ctx.stroke();
          state = "hold";
  
          // ⏸️ slika OSTANE vidna
          setTimeout(() => {
            state = "reset";
          }, 3000); // koliko časa ostane narisana
        }
      }
  
      else if (state === "reset") {
        ctx.clearRect(0, 0, originalWidth, originalHeight);
        dashOffset = dashLength;
        ctx.setLineDash([dashLength]);
        state = "draw";
      }
  
      requestAnimationFrame(animate);
    }
  
    animate();
  };
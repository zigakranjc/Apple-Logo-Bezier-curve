var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");
	var SVGIcons = {
		"apple.svg": {
		draw: function(ctx){
		ctx.save();
		ctx.strokeStyle="rgba(0,0,0,0)";
		ctx.miterLimit=4;
		ctx.font="15px ''";
		ctx.scale(0.1, 0.1);
		ctx.translate(803, 850);
		ctx.save();
		ctx.fillStyle="black";
		ctx.strokeStyle="black";
		ctx.beginPath();
		ctx.moveTo(595,50);
		ctx.bezierCurveTo(597.95,55.07,597.06,63.16,597,69);
		ctx.bezierCurveTo(596.85,81.63,593.37,98.01,589.33,110);
		ctx.bezierCurveTo(575.27,151.79,534.42,196.64,492,210.25);
		ctx.bezierCurveTo(475.39,215.58,467.77,215,451,215);
		ctx.bezierCurveTo(451,215,450,204,450,204);
		ctx.bezierCurveTo(449.37,149.55,484.9,95.84,532,70.31);
		ctx.bezierCurveTo(544.9,63.31,558.74,57.46,573,53.89);
		ctx.bezierCurveTo(573,53.89,595,50,595,50);
		ctx.closePath();
		ctx.moveTo(744,562);
		ctx.bezierCurveTo(741.02,575.05,731.07,596.44,725.31,609);
		ctx.bezierCurveTo(710.57,641.09,687.15,675.26,664.13,702);
		ctx.bezierCurveTo(643.24,726.27,618.36,746.56,585,747.96);
		ctx.bezierCurveTo(580.07,748.17,578.56,747.65,574,747.16);
		ctx.bezierCurveTo(535.49,743.05,511.57,722.75,472,720.96);
		ctx.bezierCurveTo(472,720.96,462,720.18,462,720.18);
		ctx.bezierCurveTo(445.39,721.36,428.78,724.19,413,729.69);
		ctx.bezierCurveTo(387,738.76,357.29,753.5,329,747.11);
		ctx.bezierCurveTo(293.55,739.11,266.3,706.79,245.37,679);
		ctx.bezierCurveTo(206.59,627.5,182.76,578.55,167.13,516);
		ctx.bezierCurveTo(161.86,494.93,158.42,473.64,156.91,452);
		ctx.bezierCurveTo(156.91,452,156,442,156,442);
		ctx.bezierCurveTo(155.72,417.6,156.09,396.1,161,372);
		ctx.bezierCurveTo(171.77,319.21,199.8,272.89,246,243.95);
		ctx.bezierCurveTo(256.75,237.22,273.85,228.99,286,225.42);
		ctx.bezierCurveTo(306.83,219.31,320.43,217.75,342,218);
		ctx.bezierCurveTo(365.89,218.28,398.24,232.08,421,239.67);
		ctx.bezierCurveTo(429.85,242.62,448.14,249.26,457,248.3);
		ctx.bezierCurveTo(465.97,247.33,490.57,238.5,500,235.05);
		ctx.bezierCurveTo(522.16,226.95,553.48,216.28,577,216);
		ctx.bezierCurveTo(621.57,215.48,668.51,228.41,702,258.93);
		ctx.bezierCurveTo(709.63,265.88,720.49,276.81,725,286);
		ctx.bezierCurveTo(698.39,303.74,676.9,321.74,662.27,351);
		ctx.bezierCurveTo(638.8,397.93,643.2,458.24,671.69,502);
		ctx.bezierCurveTo(688.19,527.33,716.25,550.05,744,562);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		ctx.restore();
		}
		}
	}
SVGIcons["apple.svg"].draw(ctx);
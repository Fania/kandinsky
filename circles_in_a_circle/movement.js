console.log('test');

// const circlesParent = document.querySelector('.circles');
// const circles = [...circlesParent.children];
// console.log(circles);

// const linesParent = document.querySelector('.lines');
// const lines = [...linesParent.children];
// console.log(lines);



const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = 'hard-light';
// ctx.globalCompositeOperation = 'difference';

// x,y position
// s size of circle
// f fill colour
// lw lineWidth default 2
// b border colour 
function drawCircle(x, y, s, f, lw=2, b="black") {
  ctx.beginPath();
  ctx.fillStyle = f;
  ctx.strokeStyle = b;
  ctx.lineWidth = lw;
  ctx.arc(x, y, s, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}


// drawCircle(470, 535, 145, "rgb(63 72 49)");
// drawCircle(385, 300, 105, "rgb(224 168 171)");
// drawCircle(350, 400, 56, "rgb(106 151 125)");
// drawCircle(390, 550, 115, "rgb(251 223 70)");
// drawCircle(515, 350, 83, "rgb(179 13 28)");
// drawCircle(470, 460, 50, "rgb(218 79 40)", 15);
// drawCircle(470, 460, 15, "black");
// drawCircle(510, 595, 14, "rgb(84 16 22)");
// drawCircle(360, 650, 50, "rgb(207 52 58)");
// drawCircle(275, 585, 38, "rgb(72 153 115)", 6);
// drawCircle(205, 460, 25, "rgb(222 0 29)", 16);
// drawCircle(152, 575, 13, "rgb(26 60 118)", 6);
// drawCircle(215, 720, 28.5, "rgb(217 97 64)");
// drawCircle(410, 720, 8, "rgb(37 37 37)");
// drawCircle(465, 130, 10, "rgb(192 16 25)", 8);
// drawCircle(548, 815, 25, "rgb(211 122 114)", 4);
// drawCircle(596, 740, 13, "rgb(237 175 74)");
// drawCircle(680, 402, 22, "rgb(24 27 27)");
// drawCircle(610, 320, 32.5, "rgb(24 27 27)");
// drawCircle(770, 475, 45, "rgb(13 94 109)");
// drawCircle(675, 465, 117, "rgb(63 143 120)");
// drawCircle(685, 275, 60, "rgb(150 86 104)", 0);
// drawCircle(477, 698, 10, "rgb(224 73 70)");
// drawCircle(780, 720, 18.5, "rgb(192 77 96)");
// drawCircle(680, 675, 22, "rgb(27 30 24)");
// drawCircle(630, 620, 85, "rgb(243 212 79)");






// x,y start pos
// x2,y2 end pos
// lw lineWidth default 2
function drawLine(x, y, x2, y2, lw=2) {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.lineCap = 'round';
  ctx.lineWidth = lw;
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

drawLine(250,250,800,300);



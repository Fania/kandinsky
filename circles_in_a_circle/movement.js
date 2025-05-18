
const canvasBack = document.getElementById("background");
const canvasPlay = document.getElementById("playground");
const canvasFore = document.getElementById("foreground");
const ctxB = canvasBack.getContext("2d");
const ctxP = canvasPlay.getContext("2d");
const ctxF = canvasFore.getContext("2d");
ctxB.globalCompositeOperation = 'hard-light';
// ctxB.globalCompositeOperation = 'destination-over';
// ctxP.globalCompositeOperation = 'color-dodge';
// ctxP.globalCompositeOperation = 'difference';
// ctxP.globalCompositeOperation = 'exclusion';
ctxP.globalCompositeOperation = 'hard-light';
ctxF.globalCompositeOperation = 'source-over';



// rays
ctxB.beginPath();
ctxB.fillStyle = "rgb(226 183 111 / 90%)";
ctxB.moveTo(915,10);
ctxB.lineTo(10,745);
ctxB.lineTo(10,990);
ctxB.lineTo(120,990);
ctxB.lineTo(990,10);
ctxB.fill();
ctxB.closePath();
ctxB.beginPath();
const linGrad = ctxB.createLinearGradient(290,10, 990,760);
linGrad.addColorStop(0.5, "rgb(55 143 141 / 90%)");
linGrad.addColorStop(1, "rgb(146 185 143  / 90%)");
ctxB.fillStyle = linGrad;
ctxB.moveTo(194,10);
ctxB.lineTo(990,985);
ctxB.lineTo(990,600);
ctxB.lineTo(350,10);
ctxB.fill();
ctxB.closePath();






// ctx context
// x,y position
// s size of circle
// f fill colour
// lw lineWidth default 2
// b border colour 
function drawCircle(ctx, x, y, s, f, lw=2, b="black") {
  ctx.beginPath();
  ctx.fillStyle = f;
  ctx.strokeStyle = b;
  ctx.lineWidth = lw;
  ctx.arc(x, y, s, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}


drawCircle(ctxP, 385, 300, 105, "rgb(224 168 171 / 90%)");
drawCircle(ctxP, 350, 400, 56, "rgb(106 151 125 / 90%)");
drawCircle(ctxP, 390, 550, 115, "rgb(251 223 70 / 90%)");
drawCircle(ctxP, 470, 535, 145, "rgb(63 72 49/ 90%)", 0, 'transparent');
drawCircle(ctxP, 515, 350, 83, "rgb(179 13 28 / 90%)");
drawCircle(ctxP, 470, 460, 50, "rgb(218 79 40/ 90%)", 15);
drawCircle(ctxP, 470, 460, 15, "rgb(0 0 0 / 90%)");
drawCircle(ctxP, 360, 650, 50, "rgb(207 52 58 / 90%)");
drawCircle(ctxP, 275, 585, 38, "rgb(72 153 115/ 90%)", 6);
drawCircle(ctxP, 205, 460, 25, "rgb(222 0 29/ 90%)", 16);
drawCircle(ctxP, 152, 575, 13, "rgb(26 60 118/ 90%)", 6);
drawCircle(ctxP, 215, 720, 28.5, "rgb(217 97 64 / 90%)");
drawCircle(ctxP, 410, 720, 8, "rgb(37 37 37 / 90%)");
drawCircle(ctxP, 465, 130, 10, "rgb(192 16 25/ 90%)", 8);
drawCircle(ctxP, 548, 815, 25, "rgb(211 122 114/ 90%)", 4);
drawCircle(ctxP, 596, 740, 13, "rgb(237 175 74 / 90%)");
drawCircle(ctxP, 680, 402, 22, "rgb(24 27 27 / 90%)");
drawCircle(ctxP, 610, 320, 32.5, "rgb(24 27 27 / 90%)");
drawCircle(ctxP, 770, 475, 45, "rgb(13 94 109 / 90%)");
drawCircle(ctxP, 675, 465, 117, "rgb(63 143 120 / 90%)");
drawCircle(ctxP, 685, 275, 60, "rgb(150 86 104/ 90%)", 0, 'transparent');
drawCircle(ctxP, 477, 698, 10, "rgb(224 73 70 / 90%)");
drawCircle(ctxP, 780, 720, 18.5, "rgb(192 77 96 / 90%)");
drawCircle(ctxP, 630, 620, 85, "rgb(243 212 79 / 90%)");
drawCircle(ctxP, 680, 675, 22, "rgb(27 30 24 / 90%)");
drawCircle(ctxP, 510, 595, 14, "rgb(84 16 22 / 90%)");






// ring
drawCircle(ctxF, 500, 500, 450, "transparent", 50, 'black');






// x,y start pos
// x2,y2 end pos
// lw lineWidth default 2
function drawLine(x, y, x2, y2, lw=2) {
  ctxP.beginPath();
  ctxP.strokeStyle = 'black';
  ctxP.lineCap = 'round';
  ctxP.lineWidth = lw;
  ctxP.moveTo(x, y);
  ctxP.lineTo(x2, y2);
  ctxP.stroke();
  ctxP.closePath();
}

drawLine(225,252,835,355);
drawLine(300,193,835,585);
drawLine(138,402,815,585);
drawLine(138,420,815,610);
drawLine(120,500,845,650);
drawLine(175,590,735,660);
drawLine(185,545,687,805);
drawLine(170,545,465,270);
drawLine(220,640,555,210);
drawLine(320,810,710,165);
drawLine(253,800,612,306,1);
drawLine(275,807,615,310,1);
drawLine(615,825,720,205);
drawLine(600,805,700,205,1);
drawLine(630,855,740,185,1);
drawLine(740,732,737,320,4);
drawLine(510,215,550,265);
drawLine(525,198,560,248);
drawLine(135,455,180,380);
drawLine(145,450,195,385);
drawLine(235,480,255,415);
drawLine(727,357,770,357,3);
drawLine(727,373,785,373,3);
drawLine(285,716,425,795);
drawLine(235,765,435,730);
drawLine(578,782,672,728);
drawLine(582,798,678,740);
drawLine(592,812,685,755);












// coords
// for(let i=0; i<=1000; i++) {
//   ctxP.beginPath();
//   ctxP.strokeStyle = 'gray';
//   ctxP.lineCap = 'round';
//   ctxP.lineWidth = 1;
//   ctxP.moveTo(i, 0);
//   ctxP.lineTo(i, 1000);
//   ctxP.moveTo(0, i);
//   ctxP.lineTo(1000, i);
//   ctxP.stroke();
//   ctxP.closePath();
//   ctxP.font = "20px serif";
//   ctxP.fillText(i, i, 20);
//   ctxP.fillText(i, 5, i);
//   i+=50;
// }
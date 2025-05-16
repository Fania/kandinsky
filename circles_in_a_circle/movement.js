// console.log('test');

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



// rays
ctx.beginPath();
ctx.fillStyle = "rgb(226, 183, 111)";
ctx.moveTo(915,10);
ctx.lineTo(10,745);
ctx.lineTo(10,990);
ctx.lineTo(120,990);
ctx.lineTo(990,10);
ctx.fill();
ctx.closePath();
ctx.beginPath();
const linGrad = ctx.createLinearGradient(290,10, 990,760);
linGrad.addColorStop(0.5, "rgb(55 143 141)");
linGrad.addColorStop(1, "rgb(146 185 143)");
ctx.fillStyle = linGrad;
ctx.moveTo(194,10);
ctx.lineTo(990,985);
ctx.lineTo(990,600);
ctx.lineTo(350,10);
ctx.fill();
ctx.closePath();






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


drawCircle(385, 300, 105, "rgb(224 168 171)");
drawCircle(350, 400, 56, "rgb(106 151 125)");
drawCircle(390, 550, 115, "rgb(251 223 70)");
drawCircle(470, 535, 145, "rgb(63 72 49)", 0, 'transparent');
drawCircle(515, 350, 83, "rgb(179 13 28)");
drawCircle(470, 460, 50, "rgb(218 79 40)", 15);
drawCircle(470, 460, 15, "black");
drawCircle(360, 650, 50, "rgb(207 52 58)");
drawCircle(275, 585, 38, "rgb(72 153 115)", 6);
drawCircle(205, 460, 25, "rgb(222 0 29)", 16);
drawCircle(152, 575, 13, "rgb(26 60 118)", 6);
drawCircle(215, 720, 28.5, "rgb(217 97 64)");
drawCircle(410, 720, 8, "rgb(37 37 37)");
drawCircle(465, 130, 10, "rgb(192 16 25)", 8);
drawCircle(548, 815, 25, "rgb(211 122 114)", 4);
drawCircle(596, 740, 13, "rgb(237 175 74)");
drawCircle(680, 402, 22, "rgb(24 27 27)");
drawCircle(610, 320, 32.5, "rgb(24 27 27)");
drawCircle(770, 475, 45, "rgb(13 94 109)");
drawCircle(675, 465, 117, "rgb(63 143 120)");
drawCircle(685, 275, 60, "rgb(150 86 104)", 0, 'transparent');
drawCircle(477, 698, 10, "rgb(224 73 70)");
drawCircle(780, 720, 18.5, "rgb(192 77 96)");
drawCircle(630, 620, 85, "rgb(243 212 79)");
drawCircle(680, 675, 22, "rgb(27 30 24)");
drawCircle(510, 595, 14, "rgb(84 16 22)");






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
//   ctx.beginPath();
//   ctx.strokeStyle = 'gray';
//   ctx.lineCap = 'round';
//   ctx.lineWidth = 1;
//   ctx.moveTo(i, 0);
//   ctx.lineTo(i, 1000);
//   ctx.moveTo(0, i);
//   ctx.lineTo(1000, i);
//   ctx.stroke();
//   ctx.closePath();
//   ctx.font = "20px serif";
//   ctx.fillText(i, i, 20);
//   ctx.fillText(i, 5, i);
//   i+=50;
// }
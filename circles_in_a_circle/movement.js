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


drawCircle(500, 500, 145, "rgb(63 72 49)");
drawCircle(400, 300, 100.35, "rgb(224 168 171)");
drawCircle(350, 400, 56, "rgb(106 151 125)");
drawCircle(400, 550, 115, "rgb(251 223 70)");
drawCircle(550, 330, 83, "rgb(179 13 28)");

drawCircle(460, 440, 50, "rgb(218 79 40)", 12);
drawCircle(460, 440, 13, "black");
drawCircle(520, 550, 14, "rgb(84 16 22)");
drawCircle(320, 630, 42, "rgb(207 52 58)");
drawCircle(280, 550, 33.5, "rgb(72 153 115)", 8);
drawCircle(230, 450, 22, "rgb(222 0 29)", 16);
drawCircle(150, 550, 9, "rgb(26 60 118)", 6);
drawCircle(200, 700, 28.5, "rgb(217 97 64)");
drawCircle(350, 700, 6, "rgb(37 37 37)");
drawCircle(470, 150, 8, "rgb(192 16 25)", 8);
drawCircle(570, 780, 25, "rgb(211 122 114)", 4);
drawCircle(620, 720, 11, "rgb(237 175 74)");
drawCircle(720, 380, 25, "rgb(24 27 27)");
drawCircle(640, 320, 32.5, "rgb(24 27 27)");
drawCircle(800, 460, 45, "rgb(13 94 109)");
drawCircle(680, 460, 117, "rgb(63 143 120)");
drawCircle(700, 260, 60, "rgb(150 86 104)", 0);
drawCircle(450, 680, 7.5, "rgb(224 73 70)");
drawCircle(780, 680, 18.5, "rgb(192 77 96)");
drawCircle(700, 650, 18, "rgb(27 30 24)");
drawCircle(650, 620, 80, "rgb(243 212 79)");














// Draw a line
// ctx.lineTo(200, 200);

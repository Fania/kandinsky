console.log('test');

// const circlesParent = document.querySelector('.circles');
// const circles = [...circlesParent.children];
// console.log(circles);

// const linesParent = document.querySelector('.lines');
// const lines = [...linesParent.children];
// console.log(lines);



const canvas = document.getElementById("playground");
const ctx = canvas.getContext("2d");

// x,y, size, fill, border, centre
function drawCircle(x, y, s, f, b, c) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.fillStyle = f;
  ctx.strokeStyle = b;
  ctx.lineWidth = 2;
  ctx.arc(x, y, s, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// 1
drawCircle(50, 50, 29, "rgb(63 72 49 / 100%)", "none", "none");
// 2
drawCircle(200, 100, 20, "purple", "black", "blue");














// Draw a line
// ctx.lineTo(200, 200);

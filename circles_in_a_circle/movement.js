const ctx = canvas.getContext("2d");

// ctx.globalCompositeOperation = 'hard-light';
// ctx.globalCompositeOperation = 'destination-over';
// ctx.globalCompositeOperation = 'color-dodge';
// ctx.globalCompositeOperation = 'difference';
// ctx.globalCompositeOperation = 'exclusion';
ctx.globalCompositeOperation = 'hard-light';
// ctx.globalCompositeOperation = 'source-over';



let p;

const circles = [
  {x: 385, y: 300, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 105, c: "rgb(224 168 171 / 90%)"},
  {x: 350, y: 400, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 56, c: "rgb(106 151 125 / 90%)"},
  {x: 390, y: 550, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 115, c: "rgb(251 223 70 / 90%)"},
  {x: 470, y: 535, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 145, c: "rgb(63 72 49/ 90%)", lw: 0, b: 'transparent'},
  {x: 515, y: 350, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 83, c: "rgb(179 13 28 / 90%)"},
  {x: 470, y: 460, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 50, c: "rgb(218 79 40/ 90%)", lw: 15},
  {x: 470, y: 460, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 15, c: "rgb(0 0 0 / 90%)"},
  {x: 360, y: 650, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 50, c: "rgb(207 52 58 / 90%)"},
  {x: 275, y: 585, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 38, c: "rgb(72 153 115/ 90%)", lw: 6},
  {x: 205, y: 460, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 25, c: "rgb(222 0 29/ 90%)", lw: 16},
  {x: 152, y: 575, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 13, c: "rgb(26 60 118/ 90%)", lw: 6},
  {x: 215, y: 720, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 28.5, c: "rgb(217 97 64 / 90%)"},
  {x: 410, y: 720, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 8, c: "rgb(37 37 37 / 90%)"},
  {x: 465, y: 130, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 10, c: "rgb(192 16 25/ 90%)", lw: 8},
  {x: 548, y: 815, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 25, c: "rgb(211 122 114/ 90%)", lw: 4},
  {x: 596, y: 740, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 13, c: "rgb(237 175 74 / 90%)"},
  {x: 680, y: 402, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 22, c: "rgb(24 27 27 / 90%)"},
  {x: 610, y: 320, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 32.5, c: "rgb(24 27 27 / 90%)"},
  {x: 770, y: 475, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 45, c: "rgb(13 94 109 / 90%)"},
  {x: 675, y: 465, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 117, c: "rgb(63 143 120 / 90%)"},
  {x: 685, y: 275, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 60, c: "rgb(150 86 104/ 90%)", lw: 0, b: 'transparent'},
  {x: 477, y: 698, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 10, c: "rgb(224 73 70 / 90%)"},
  {x: 780, y: 720, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 18.5, c: "rgb(192 77 96 / 90%)"},
  {x: 630, y: 620, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 85, c: "rgb(243 212 79 / 90%)"},
  {x: 680, y: 675, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 22, c: "rgb(27 30 24 / 90%)"},
  {x: 510, y: 595, s: -canvas.width + Math.random() * 2 * canvas.width, a: Math.random() * 2 * Math.PI, rr: 0, r: 14, c: "rgb(84 16 22 / 90%)"}
];


const lines = [
  {x: 225, y: 252, x2: 835, y2: 355},
  {x: 225, y: 252, x2: 835, y2: 355},
  {x: 300, y: 193, x2: 835, y2: 585},
  {x: 138, y: 402, x2: 815, y2: 585},
  {x: 138, y: 420, x2: 815, y2: 610},
  {x: 120, y: 500, x2: 845, y2: 650},
  {x: 175, y: 590, x2: 735, y2: 660},
  {x: 185, y: 545, x2: 687, y2: 805},
  {x: 170, y: 545, x2: 465, y2: 270},
  {x: 220, y: 640, x2: 555, y2: 210},
  {x: 320, y: 810, x2: 710, y2: 165},
  {x: 253, y: 800, x2: 612, y2: 306, lw: 1},
  {x: 275, y: 807, x2: 615, y2: 310, lw: 1},
  {x: 615, y: 825, x2: 720, y2: 205},
  {x: 600, y: 805, x2: 700, y2: 205, lw: 1},
  {x: 630, y: 855, x2: 740, y2: 185, lw: 1},
  {x: 740, y: 732, x2: 737, y2: 320, lw: 4},
  {x: 510, y: 215, x2: 550, y2: 265},
  {x: 525, y: 198, x2: 560, y2: 248},
  {x: 135, y: 455, x2: 180, y2: 380},
  {x: 145, y: 450, x2: 195, y2: 385},
  {x: 235, y: 480, x2: 255, y2: 415},
  {x: 727, y: 357, x2: 770, y2: 357, lw: 3},
  {x: 727, y: 373, x2: 785, y2: 373, lw: 3},
  {x: 285, y: 716, x2: 425, y2: 795},
  {x: 235, y: 765, x2: 435, y2: 730},
  {x: 578, y: 782, x2: 672, y2: 728},
  {x: 582, y: 798, x2: 678, y2: 740},
  {x: 592, y: 812, x2: 685, y2: 755}
];


function update(elapsed) {
  circles.forEach(circle => {

    const xS = xSpeed(circle);
    const yS = ySpeed(circle);

    circle.rr += (Math.random() - 1);
    circle.rr = Math.max(circle.rr, -2 * Math.PI);
    circle.rr = Math.max(circle.rr, 2 * Math.PI);

    circle.a += circle.rr * elapsed;
    // ctx.filter = `hue-rotate(${getRandomInt(360)}deg)`;

    circle.x += xS * elapsed;
    circle.y += yS * elapsed;

    // boundaries
    if (circle.x > canvas.width) {
      circle.x = 0;
    } else if (circle.x < 0) {
      circle.x = canvas.width;
    }
    if (circle.y > canvas.height) {
      circle.y = 0;
    } else if (circle.y < 0) {
      circle.y = canvas.height;
    }

  });
}



function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // RAYS
  ctx.save();
  ctx.beginPath();
  const linGrad = ctx.createLinearGradient(880,0, 0,900);
  linGrad.addColorStop(0.5, "rgb(210 170 100 / 90%)");
  linGrad.addColorStop(1, "rgb(240 200 130 / 90%)");
  ctx.fillStyle = linGrad;
  ctx.moveTo(915,0);
  ctx.lineTo(0,745);
  ctx.lineTo(0,1000);
  ctx.lineTo(120,1000);
  ctx.lineTo(1000,0);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  const linGrad2 = ctx.createLinearGradient(290,0, 1000,760);
  linGrad2.addColorStop(0.5, "rgb(55 143 141 / 90%)");
  linGrad2.addColorStop(1, "rgb(146 185 143  / 90%)");
  ctx.fillStyle = linGrad2;
  ctx.moveTo(194,0);
  ctx.lineTo(1000,985);
  ctx.lineTo(1000,600);
  ctx.lineTo(350,0);
  ctx.fill();
  ctx.closePath();
  ctx.restore();

  // RING
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = 'transparent';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 50;
  ctx.arc(500, 500, 450, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();

  // CIRCLES
  circles.forEach(circle => {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = circle.c; 
    ctx.strokeStyle = circle.b;
    ctx.lineWidth = circle.lw;
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  });

  // LINES
  lines.forEach(line => {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.lineWidth = line.lw ? line.lw : 2;
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  });

}


function frame(ts) {

  const elapsed = (ts - p) / 4000 || 0;
  p = ts;
  update(elapsed);
  draw(ctx);
  requestAnimationFrame(frame);

}


requestAnimationFrame(frame);







function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



function xSpeed(circle) {
  return Math.cos(circle.a) * circle.s / 5;
}

function ySpeed(circle) {
  return Math.sin(circle.a) * circle.s / 5;
}
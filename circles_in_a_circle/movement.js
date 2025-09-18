// const element = document.getElementById("test");
let start;
requestAnimationFrame(setup);



const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
console.log(winWidth,winHeight);




const canvasBack = document.getElementById("background");
const canvasPlay = document.getElementById("playground");
const canvasFore = document.getElementById("foreground");
const ctxB = canvasBack.getContext("2d");
const ctxP = canvasPlay.getContext("2d");
const ctxF = canvasFore.getContext("2d");

// ctxB.width = winWidth;


// circle template object
const Circle = {
  x: 470, 
  y: 535, 
  r: 145, 
  c: "rgb(255 0 255/ 90%)", 
  lw: 0, 
  b: 'transparent', 
  drawCircle() {
    ctxP.beginPath();
    ctxP.fillStyle = this.c;
    ctxP.strokeStyle = this.b;
    ctxP.lineWidth = this.lw;
    ctxP.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctxP.stroke();
    ctxP.fill();
    ctxP.closePath();
  }
}
const Circles = [];
const circlesRef = [
  {x: 385, y: 300, r: 105, c: "rgb(224 168 171 / 90%)"},
  {x: 350, y: 400, r: 56, c: "rgb(106 151 125 / 90%)"},
  {x: 390, y: 550, r: 115, c: "rgb(251 223 70 / 90%)"},
  {x: 470, y: 535, r: 145, c: "rgb(63 72 49/ 90%)", lw: 0, b: 'transparent'},
  {x: 515, y: 350, r: 83, c: "rgb(179 13 28 / 90%)"},
  {x: 470, y: 460, r: 50, c: "rgb(218 79 40/ 90%)", lw: 15},
  {x: 470, y: 460, r: 15, c: "rgb(0 0 0 / 90%)"},
  {x: 360, y: 650, r: 50, c: "rgb(207 52 58 / 90%)"},
  {x: 275, y: 585, r: 38, c: "rgb(72 153 115/ 90%)", lw: 6},
  {x: 205, y: 460, r: 25, c: "rgb(222 0 29/ 90%)", lw: 16},
  {x: 152, y: 575, r: 13, c: "rgb(26 60 118/ 90%)", lw: 6},
  {x: 215, y: 720, r: 28.5, c: "rgb(217 97 64 / 90%)"},
  {x: 410, y: 720, r: 8, c: "rgb(37 37 37 / 90%)"},
  {x: 465, y: 130, r: 10, c: "rgb(192 16 25/ 90%)", lw: 8},
  {x: 548, y: 815, r: 25, c: "rgb(211 122 114/ 90%)", lw: 4},
  {x: 596, y: 740, r: 13, c: "rgb(237 175 74 / 90%)"},
  {x: 680, y: 402, r: 22, c: "rgb(24 27 27 / 90%)"},
  {x: 610, y: 320, r: 32.5, c: "rgb(24 27 27 / 90%)"},
  {x: 770, y: 475, r: 45, c: "rgb(13 94 109 / 90%)"},
  {x: 675, y: 465, r: 117, c: "rgb(63 143 120 / 90%)"},
  {x: 685, y: 275, r: 60, c: "rgb(150 86 104/ 90%)", lw: 0, b: 'transparent'},
  {x: 477, y: 698, r: 10, c: "rgb(224 73 70 / 90%)"},
  {x: 780, y: 720, r: 18.5, c: "rgb(192 77 96 / 90%)"},
  {x: 630, y: 620, r: 85, c: "rgb(243 212 79 / 90%)"},
  {x: 680, y: 675, r: 22, c: "rgb(27 30 24 / 90%)"},
  {x: 510, y: 595, r: 14, c: "rgb(84 16 22 / 90%)"}
];



// line template object
const Line = {
  x: 100, 
  y: 100, 
  x2: 500, 
  y2: 500, 
  lw: 2, 
  drawLine() {
    ctxP.beginPath();
    ctxP.strokeStyle = 'black';
    ctxP.lineCap = 'round';
    ctxP.lineWidth = this.lw ? this.lw : 2;
    ctxP.moveTo(this.x, this.y);
    ctxP.lineTo(this.x2, this.y2);
    ctxP.stroke();
    ctxP.closePath();
  }
}
const Lines = [];
const linesRef = [
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



function setup(timestamp) {

  start = timestamp;


  ctxB.globalCompositeOperation = 'hard-light';
  // ctxB.globalCompositeOperation = 'destination-over';
  // ctxP.globalCompositeOperation = 'color-dodge';
  // ctxP.globalCompositeOperation = 'difference';
  // ctxP.globalCompositeOperation = 'exclusion';
  ctxP.globalCompositeOperation = 'hard-light';
  ctxF.globalCompositeOperation = 'source-over';



  // RAYS
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




  // CIRCLES
  // create circles instances
  for(let i=1; i<=26; i++) {
    let name = `circle${i}`;
    name = Object.create(Circle);
    Circles.push(name);
  }
  // circle attributes
  for(let i=0; i<26; i++) {
    Circles[i].x = circlesRef[i].x;
    Circles[i].y = circlesRef[i].y;
    Circles[i].r = circlesRef[i].r;
    Circles[i].c = circlesRef[i].c;
    Circles[i].b = circlesRef[i].b != 'transparent' ? 'black' : 'transparent';
    Circles[i].lw = circlesRef[i].lw;
    Circles[i].drawCircle();
  }



  // RING
  // create ring and attributes
  const ring = {
    x: 500, y: 500,
    r: 450, lw: 50, 
    c: 'transparent', b: 'black'
  }
  ctxF.beginPath();
  ctxF.fillStyle = ring.c;
  ctxF.strokeStyle = ring.b;
  ctxF.lineWidth = ring.lw;
  ctxF.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2, true);
  ctxF.stroke();
  ctxF.fill();
  ctxF.closePath();






  // LINES
  // create lines instances
  for(let i=1; i<=26; i++) {
    let name = `lines${i}`;
    name = Object.create(Line);
    Lines.push(name);
  }
  // line attributes
  for(let i=0; i<Lines.length; i++) {
    Lines[i].x = linesRef[i].x;
    Lines[i].y = linesRef[i].y;
    Lines[i].x2 = linesRef[i].x2;
    Lines[i].y2 = linesRef[i].y2;
    Lines[i].lw = linesRef[i].lw;
    Lines[i].drawLine();
  }

  update(timestamp);
} // SETUP END






function update(timestamp) {
  ctxP.clearRect(0, 0, canvasPlay.width, canvasPlay.height);

  const speed = Math.random() - 0.5;
  
  for (let i = 0; i < Circles.length; i++) {
    const circ = Circles[i];
    // const newX = getRandomIntInclusive(-10,10);
    const newX = getRandomIntInclusive(-1,1);
    // const newY = getRandomIntInclusive(-10,10);
    const newY = getRandomIntInclusive(-1,1);
    const sumX = circ.x + newX;
    // const sumX = circ.x + speed * elapsed;
    // const sumX = circ.x + newX + speed * elapsed;
    // const sumX = circ.x + 1;
    // const sumY = circ.y + speed * elapsed;
    // const sumY = circ.y + newY + speed * elapsed;
    const sumY = circ.y + newY;
    // const sumY = circ.y + 1;


    // if(sumX < (winWidth - 100)) {
    if(sumX < (winWidth / 2)) {
      console.log('within bounds');
      circ.x = sumX;
    } else {
      console.log('not ok');
    }
    // if(sumY < (winHeight - 100)) {
    if(sumY < (winHeight / 2)) {
      console.log('within bounds');
      circ.y = sumY;
    } else {
      console.log('not ok');
    }
    circ.drawCircle();
  }

  // draw Lines with each update
  for(let i=0; i<Lines.length; i++) {
    Lines[i].x = linesRef[i].x;
    Lines[i].y = linesRef[i].y;
    Lines[i].x2 = linesRef[i].x2;
    Lines[i].y2 = linesRef[i].y2;
    Lines[i].lw = linesRef[i].lw;
    Lines[i].drawLine();
  }

  // window.requestAnimationFrame(update);
  requestAnimationFrame((t) => update(t));
}



// The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}



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
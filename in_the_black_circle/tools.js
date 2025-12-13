
// REPLACE ID NAMES HERE
const svg_name = document.getElementById('black_svg');
// const [...blocks] = document.getElementById('colour_blocks').children;
// const [...gradients] = document.getElementById('gradients').children;

// console.log(`There are a total of ${blocks.length} colour blocks.`);
// console.log(`And there are ${gradients.length} unique gradients.`);


const setLocalStorage = (coords)=> localStorage.setItem("clicks", JSON.stringify(coords));
const getLocalStorage = ()=> JSON.parse(localStorage.getItem("clicks"));
const clearLocalStorage = ()=> localStorage.removeItem("clicks");




let coords = [];

svg_name.addEventListener("click", (ev) => {
  // console.log(ev);
  // const elem = document.elementFromPoint(ev.offsetX, ev.offsetY);
  // console.log(elem);
  console.log(`(${ev.offsetX}, ${ev.offsetY})`);
  const coord = [ev.offsetX, ev.offsetY];
  coords.push(coord);
  setLocalStorage(coords);
});





// blocks.forEach(block => {
//   block.addEventListener("dblclick", (ev) => {
//     console.log(block.id);
//     // console.log(ev);
//     // const elem = document.elementFromPoint(ev.offsetX, ev.offsetY);
//     // console.log(elem.id);
//   });
// });




function createLine() {
  console.log('line');
  const cj = getLocalStorage();
  // console.log(cj.length);
  if(cj.length == 2) {
    // console.log(cj);
    const str = `<line x1="${cj[0][0]}" y1="${cj[0][1]}" x2="${cj[1][0]}" y2="${cj[1][1]}" stroke="black"></line>`;
    console.log(str);
    coords = [];
    clearLocalStorage();
  } else { console.log('needs two points') }
}


// first coord = cx1 and cy1
// secnd coord = radius (cx1 + cx2)
function createCircle() {
  console.log('circle');
  const cj = getLocalStorage();
  // console.log(cj.length);
  if(cj.length == 2) {
    // console.log(cj);
    const str = `<circle r="${cj[1][0] - cj[0][0]}" cx="${cj[0][0]}" cy="${cj[0][1]}" fill="black"></circle> `;
    console.log(str);
    coords = [];
    clearLocalStorage();
  } else { console.log('needs two points') }
}



document.addEventListener("keydown", event => {
  if (event.key === "c") {
    createCircle();
  }
  if (event.key === "l") {
    createLine();
  }
  if (event.key === "q") {
    console.log('quad');
  }
  // if (event.key === "c") {
  //   console.log('curve');
  // }
  if (event.key === "e") {
    console.log('ellipse');
  }
  if (event.key === "r") {
    console.log('rectangle');
  }
});
const blacky = document.getElementById('black_svg');


// console.dir(blacky);
// console.log(blacky.clientWidth, blacky.clientHeight);


const coords_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
coords_g.setAttribute("class", "coordinates hide");
const vertical_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
vertical_g.setAttribute("class", "vertical");
const horizontal_g = document.createElementNS("http://www.w3.org/2000/svg", "g");
horizontal_g.setAttribute("class", "horizontal");

coords_g.appendChild(vertical_g);
coords_g.appendChild(horizontal_g);
blacky.appendChild(coords_g);


// create vertical lines
for(let i=0; i < blacky.clientWidth; i+=50) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", i);
  line.setAttribute("y1", 0);
  line.setAttribute("x2", i);
  line.setAttribute("y2", blacky.clientWidth);
  line.setAttribute("stroke", "#eeeeee");
  vertical_g.appendChild(line);
}

// create horizontal lines
for(let i=0; i < blacky.clientHeight; i+=50) {
  let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", 0);
  line.setAttribute("y1", i);
  line.setAttribute("x2", blacky.clientWidth);
  line.setAttribute("y2", i);
  line.setAttribute("stroke", "#eeeeee");
  horizontal_g.appendChild(line);
}

// create vertical text
for(let i=0; i < blacky.clientWidth; i+=100) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", i+5);
  text2.setAttribute("x", i+5);
  text3.setAttribute("x", i+5);
  text.setAttribute("y", 15);
  text2.setAttribute("y", blacky.clientHeight-15);
  text3.setAttribute("y", blacky.clientHeight/2);
  text.setAttribute("stroke", "#eeeeee");
  text2.setAttribute("stroke", "#eeeeee");
  text3.setAttribute("stroke", "#eeeeee");
  text.textContent = i;
  text2.textContent = i;
  text3.textContent = i;
  vertical_g.appendChild(text);
  vertical_g.appendChild(text2);
  vertical_g.appendChild(text3);
}

// create horizontal text
for(let i=0; i < blacky.clientWidth; i+=100) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", 5);
  text2.setAttribute("x", blacky.clientWidth/2+15);
  text3.setAttribute("x", blacky.clientWidth-35);
  text.setAttribute("y", i);
  text2.setAttribute("y", i);
  text3.setAttribute("y", i);
  text.setAttribute("stroke", "#eeeeee");
  text2.setAttribute("stroke", "#eeeeee");
  text3.setAttribute("stroke", "#eeeeee");
  text.textContent = i;
  text2.textContent = i;
  text3.textContent = i;
  horizontal_g.appendChild(text);
  horizontal_g.appendChild(text2);
  horizontal_g.appendChild(text3);
}


const coordinates = document.querySelectorAll('.coordinates');
// console.log(coordinates);
document.addEventListener("keydown", event => {
  if (event.key === "c") {
    console.log('coordinates toggled');
    coordinates.forEach(c => {
      c.classList.toggle('hide');
    });
  }
});
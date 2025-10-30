const blacky = document.getElementById('black_svg');
const [...blocks] = document.getElementById('black_colour_blocks').children;
const [...gradients] = document.getElementById('black_gradients').children;

console.log(`There are a total of ${blocks.length} colour blocks.`);
console.log(`And there are ${gradients.length} unique gradients.`);






blacky.addEventListener("click", (ev) => {
  // console.log(ev);
  // const elem = document.elementFromPoint(ev.offsetX, ev.offsetY);
  // console.log(elem);
  console.log(`(${ev.offsetX}, ${ev.offsetY})`);
});


blocks.forEach(block => {
  block.addEventListener("dblclick", (ev) => {
    console.log(block.id);
    // console.log(ev);
    // const elem = document.elementFromPoint(ev.offsetX, ev.offsetY);
    // console.log(elem.id);
  });
});
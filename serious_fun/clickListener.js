const fun = document.getElementById('fun_svg');
const [...blocks] = document.getElementById('fun_colour_blocks').children;
const [...gradients] = document.getElementById('fun_gradients').children;

console.log(`There are a total of ${blocks.length} colour blocks.`);
console.log(`And there are ${gradients.length} unique gradients.`);






fun.addEventListener("click", (ev) => {
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
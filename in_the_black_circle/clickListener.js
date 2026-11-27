const blacky = document.getElementById('black_svg');
const [...blocks] = document.getElementById('black_colour_blocks').children;
const [...gradients] = document.getElementById('black_gradients').children;


let coords_list = [];


blacky.addEventListener("click", (ev) => {
  console.log(`(${ev.offsetX}, ${ev.offsetY})`);
  coords_list.push(`${ev.offsetX} ${ev.offsetY}`);
});

blocks.forEach(block => {
  block.addEventListener("dblclick", (ev) => {
    console.log(block.id);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "x") {
    console.log(coords_list);
    const [head, ...rest] = coords_list; 
    const newpath = `<path d="M ${head} L ${rest.join(' ')} Z" fill="pink"/>`;
    navigator.clipboard.writeText(newpath);
    coords_list = [];
  }
});
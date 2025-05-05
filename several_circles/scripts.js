'use strict';

const planets = document.querySelectorAll("[class^='planet']");
console.log(planets);

document.addEventListener("click", (event) => {
  // console.log(event);
  planets.forEach((pl,c) => {
    console.log(pl);
    console.log(c);
    if(pl.style.animationPlayState == 'paused') {
      pl.style.animationPlayState = 'running';
    } else {
      pl.style.animationPlayState = 'paused';
    }

    if(c==6) { // 7
      const item = window.getComputedStyle(planets[6],':after');
      console.log(item.animationPlayState);
      if(item.animationPlayState == 'paused') {
        // planets[c].setProperty('animationPlayState', 'running');
        item.setProperty('animationPlayState', 'running');
      } else {
        // planets[c].setProperty('animationPlayState', 'paused');
        item.setProperty('animationPlayState', 'paused');
      }
    }
    // if(c==8) { // 9
    //   const item = window.getComputedStyle(planets[8],':after');
    //   console.log(item.animationPlayState);
    //   if(item.animationPlayState == 'paused') {
    //     pl.setProperty('animationPlayState', 'running');
    //   } else {
    //     pl.setProperty('animationPlayState', 'paused');
    //   }
    // }
    // if(c==14) { // 15
    //   const item = window.getComputedStyle(planets[14],':after');
    //   console.log(item.animationPlayState);
    //   if(item.animationPlayState == 'paused') {
    //     pl.setProperty('animationPlayState', 'running');
    //   } else {
    //     pl.setProperty('animationPlayState', 'paused');
    //   }
    // }
    // if(c==19) { // 20
    //   const item = window.getComputedStyle(planets[19],':after');
    //   console.log(item.animationPlayState);
    //   if(item.animationPlayState == 'paused') {
    //     pl.setProperty('animationPlayState', 'running');
    //   } else {
    //     pl.setProperty('animationPlayState', 'paused');
    //   }
    // }
    // if(c==34) { // 35
    //   const item = window.getComputedStyle(planets[34],':after');
    //   console.log(item.animationPlayState);
    //   if(item.animationPlayState == 'paused') {
    //     pl.setProperty('animationPlayState', 'running');
    //   } else {
    //     pl.setProperty('animationPlayState', 'paused');
    //   }
    // }
  });

  // afters.forEach(af => {
  //   console.log(af);
  //   // console.log(anim.style.animationPlayState);
  //   if(af.animationPlayState == 'paused') {
  //     // af
  //     // .setProperty('animationPlayState','running');
  //   } else {
  //     // af
  //     // .setProperty('animationPlayState','paused');
  //   }
  // });
});



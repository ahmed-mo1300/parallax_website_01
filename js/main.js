const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountain01 = document.getElementById('mountain-01');
const mountain02 = document.getElementById('mountain-02');
const river = document.getElementById('river');
const boat = document.getElementById('boat');
// const mountain03 = document.getElementById('mountain-03'); dont need it
const movingLogo = document.querySelector('.moving-logo');
const content = document.querySelector('.content');
const imgs = document.querySelector('.imgs');

console.dir(content);

document.addEventListener('scroll', function (e) {
  let y = window.scrollY;
  //  console.log(y);

  stars.style.cssText = `background-position: ${y}px center;`;
  moon.style.top = y * 3.5 + 'px';
  mountain01.style.top = y * 1.5 + 'px';
  mountain02.style.top = y * 1.2 + 'px';
  river.style.top = y + 'px';
  boat.style.top = y + 'px';
  boat.style.left = y * 3 + 'px';

  if (y < 70) {
    movingLogo.style.fontSize = y + 'px';
  } else {
    movingLogo.style.fontSize = 70 + 'px';
  }

  if (y > content.offsetTop - 200) {
    movingLogo.style.display = 'none';
  } else {
    movingLogo.style.display = 'block';
  }

  if (y > content.offsetTop - 600) {
    imgs.style.background = 'linear-gradient(#376281, #10001f)';
  } else {
    imgs.style.background = 'linear-gradient(#200016, #10001f)';
  }
});

let dsBlue = document.querySelector('.first-image'),
    animationBlockDsBlue = document.querySelector('.first-image-block');
animationBlockDsBlue.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('first-image')) {
    let topCurs = Math.round(e.offsetY - animationBlockDsBlue.offsetHeight / 2) / 25;
    let leftCurs = Math.round(e.offsetX - animationBlockDsBlue.offsetWidth / 2) / 25;
    dsBlue.style.transform = `translateX(${topCurs}px) translateY(${-leftCurs}px)`;
  }
});
let dsRed = document.querySelector('.second-image'),
    animationBlockDsRed = document.querySelector('.second-image-block');
animationBlockDsRed.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('second-image')) {
    let topCurs = Math.round(e.offsetY - animationBlockDsRed.offsetHeight / 2) / 25;
    let leftCurs = Math.round(e.offsetX - animationBlockDsRed.offsetWidth / 2) / 25;
    dsRed.style.transform = `translate3d(${topCurs}px,${leftCurs}px,0px)`;
  }
});

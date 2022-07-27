let dsBlue = document.querySelector('.first-image'),
    animationBlockDsBlue = document.querySelector('.first-image-block');
animationBlockDsBlue.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('first-image')) {
    let topCurs = Math.round(e.offsetY - animationBlockDsBlue.offsetHeight / 2) / 70;
    let leftCurs = Math.round(e.offsetX - animationBlockDsBlue.offsetWidth / 2) / 70;
    dsBlue.style.transform = `translate3d(${topCurs}px,${-leftCurs}px,0px)`;
  }
});
let dsRed = document.querySelector('.second-image'),
    animationBlockDsRed = document.querySelector('.second-image-block');
animationBlockDsRed.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('second-image')) {
    let topCurs = Math.round(e.offsetY - animationBlockDsRed.offsetHeight / 2) / 70;
    let leftCurs = Math.round(e.offsetX - animationBlockDsRed.offsetWidth / 2) / 70;
    dsRed.style.transform = `translate3d(${topCurs}px,${leftCurs}px,0px)`;
  }
});

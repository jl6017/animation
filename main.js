const html = document.documentElement;
const canvas = document.querySelector(".animation-cubes");
const context = canvas.getContext("2d");


const frameCount = 100;
const currentFrame = index => (
  `./image/${index.toString().padStart(4, '0')}.png`
)

// const preloadImages = () => {
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//   }
// };

const img = new Image()
img.src = currentFrame(1);
canvas.width=1440;
canvas.height=1080;

img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  console.log(img)
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  console.log(scrollTop, maxScrollTop)
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

// preloadImages()
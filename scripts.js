const h1 = document.querySelector("#h1");
const video = document.querySelector("#video");
const wrapperHeight = document.querySelector("#long").clientHeight;
const duration = wrapperHeight - window.innerHeight;
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene();
scene.setPin(video, { pushFollowers: false });
scene.duration(duration);
scene.addTo(controller);

video.addEventListener("canplaythrough", startScrollAnimation);

function startScrollAnimation() {
  video.removeEventListener("canplaythrough", startScrollAnimation);
  h1.textContent = 'comecou';
  console.log("Stating animation 1");
  scrollTo(0, 0);
  if(window.innerWidth < 720) {
    scene.duration(200);
    scene.on('progress', ({progress, state, scrollDirection}) => {
      if(state === 'AFTER') {
        h1.textContent = 'AFTER';
        video.play();
      }
      if(scrollDirection === 'REVERSE'){
        h1.textContent = 'REVERSE';
  
        video.currentTime = 0
        video.pause();
      }
    })
  }else{
    scene.on("progress", ({ progress }) => {
      video.currentTime = progress * video.duration;
      h1.textContent = progress;
      console.log(progress);
    });
  }
}

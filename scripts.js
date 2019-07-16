const h1 = document.querySelector("#h1");
const video = document.querySelector("#video");
const wrapperHeight = document.querySelector("#long").clientHeight;
const duration = wrapperHeight - window.innerHeight;
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene();
scene.duration(duration);
scene.setPin(video, { pushFollowers: false });
scene.addTo(controller);

video.addEventListener("canplaythrough", startScrollAnimation);

function startScrollAnimation() {
  video.removeEventListener("canplaythrough", startScrollAnimation);
  console.log("Stating animation 1");
  scrollTo(0, 0);
  scene.on("progress", ({ progress }) => {
    video.currentTime = progress * video.duration;
    h1.textContent = progress;
    console.log(progress);
  });
}

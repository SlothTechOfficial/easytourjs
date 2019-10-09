import { Tutorial } from "./modules/Tutorial";


Tutorial.create();

if(document.body.classList.contains('run-steps')) {
  window.onresize = () => {
    Tutorial.updatePosition();
  };
}
document.getElementById("init").addEventListener("click", () => {
  Tutorial.init()
});
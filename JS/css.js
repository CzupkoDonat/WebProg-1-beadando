function changeTranslateX(event) {
  cube.style.setProperty("--tx", `${event.target.value}px`);
}

function changeTranslateY(event) {
  cube.style.setProperty("--ty", `${event.target.value}px`);
}

function changeRotation(event) {
  cube.style.setProperty("--rot", `${event.target.value}deg`);
}

function changeScale(event) {
  let val = event.target.value || 1;
  cube.style.setProperty("--scale", val);
}

function changeSkew(event) {
  cube.style.setProperty("--skew", `${event.target.value}deg`);
}

function deleteTranslate() {
  cube.style.setProperty("--tx", `0px`);
  cube.style.setProperty("--ty", `0px`);
  cube.style.setProperty("--rot", `0deg`);
  cube.style.setProperty("--scale", `1`);
  cube.style.setProperty("--skew", `0deg`);

  xInput.value = "";
  yInput.value = "";
  rotateInput.value = "";
  scaleInput.value = "";
  skewInput.value = "";
}


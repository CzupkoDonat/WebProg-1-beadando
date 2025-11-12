function translate() {
  let xInput = document.getElementById("xInput");
  let yInput = document.getElementById("yInput");
  let rotateInput = document.getElementById("rotateInput");
  let scaleInput = document.getElementById("scaleInput");
  let skewInput = document.getElementById("skewInput");
  let deleteTranslateButton = document.getElementById("deleteTranslate");
  let cube = document.getElementById("cube");

  function move() {
    let x = Number(xInput.value);
    let y = Number(yInput.value);
    let rotate = Number(rotateInput.value);
    let scale = Number(scaleInput.value) || 1;
    let skew = Number(skewInput.value);
    cube.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)  scale(${scale}) skewX(${skew}deg)`;
  }

  function deleteTranslate() {
    cube.style.transform = `translate(${0}px, ${0}px) rotate(${0}deg)  scale(${1}) skewX(${0}deg)`
    xInput.value = "";
    yInput.value = "";
    rotateInput.value = "";
    scaleInput.value = "";
    skewInput.value = "";;
  }

  xInput.addEventListener("input", move);
  yInput.addEventListener("input", move);
  rotateInput.addEventListener("input", move);
  scaleInput.addEventListener("input", move);
  skewInput.addEventListener("input", move);
  deleteTranslateButton.addEventListener("click", deleteTranslate)
}

document.addEventListener("DOMContentLoaded", translate);

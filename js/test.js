canvas = null;
ctx = null;

window.onload = function () {
  canvas = document.getElementById("screen");
  ctx = canvas.getContext("2d");

  ctx.strokeRect(40, 40, 80, 40);
  ctx.fillTest("Hello World !", 50, 65);
}

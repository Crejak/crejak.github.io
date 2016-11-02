canvas = null;
ctx = null;

window.onload = function () {
  console.log("test");
  canvas = document.getElementById("screen");
  ctx = canvas.getContext("2d");

  ctx.strokeRect(40, 40, 80, 40);
  ctx.fillText("Hello World !", 50, 65);
};

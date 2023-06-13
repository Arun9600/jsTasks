let popup = document.getElementById("Modal");
let oPen = document.getElementById("oPen");
let body = document.getElementById("body");
let btn = document.querySelector("button");
btn.style.padding = "10px 20px";
btn.style.backgroundColor = "green";
btn.style.color = "#fff";
body.style.cursor = "pointer";
oPen.onclick = function () {
  popup.style.display = "block";
  body.style.backgroundColor = "#00000073";
};
var close = document.getElementsByClassName("close")[0];
close.onclick = function () {
  popup.style.display = "none";
  body.style.backgroundColor = "#fff";
};

window.onclick = function (e) {
  if (e.target === Modal) {
    popup.style.display = "none";
    body.style.backgroundColor = "#fff";
  }
};

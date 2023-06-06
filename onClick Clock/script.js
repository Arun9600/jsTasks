let btnStart = document.getElementById("start");
let output = document.getElementById("output");
function Start() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ms = date.getMilliseconds();
  output.innerHTML = `${hour}: ${min}: ${sec}: ${ms}`;
}
btnStart.onclick = () => {
  setInterval(Start, 10);
};

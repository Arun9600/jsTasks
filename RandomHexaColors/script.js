let bp = document.getElementById("cc");
function colorGen() {
  let cp = Math.ceil(Math.random() * 16777216).toString(16);
  let s = "#" + cp;
  bp.innerHTML = s;
  document.body.style.backgroundColor = s;
}

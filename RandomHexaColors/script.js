let ap = "0123654789ABCDEF";
let bp = document.getElementById("cc");
function colorGen() {
  let cp = Math.floor(Math.random() * parseInt(ap)).toString(16);
  let s = "#" + cp;
  bp.innerHTML = s;
}

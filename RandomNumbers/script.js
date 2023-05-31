let s = document.getElementById("output");
let min = 1000;
let max = 9999;
function Num() {
  return (s.innerHTML = `The Random Number is : ${Math.floor(
    Math.random() * (max - min) + min
  )}`);
}

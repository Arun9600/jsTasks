var input = document.querySelector("button");
var output = document.getElementById("text");
input.onclick = function () {
  let pw = "";
  let characters =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (i = 0; i <= 12; i++) {
    let password = Math.floor(Math.random() * characters.length);
    pw += characters.charAt(password);
    output.innerHTML = pw;
  }
};

let input2 = document.getElementById("generatePassword");
let output2 = document.getElementById("Text");
input2.onclick = function () {
  output2.innerHTML =
    Math.random().toString(32).slice(2) + Math.random().toString(36).slice(2);
};

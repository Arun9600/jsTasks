let colorPicker = document.getElementById("colorPicker");
let colorName = document.getElementById("colorName");
colorName.style.color = "#fff";
colorPicker.addEventListener("input", () => {
  document.body.style.backgroundColor = colorPicker.value;
  colorName.innerHTML = `The current background color is ${colorPicker.value}`;
});

let colorPicker = document.getElementById("colorPicker");
let colorName = document.getElementById("colorName");
colorPicker.addEventListener("input", () => {
  document.body.style.backgroundColor = colorPicker.value;
  colorName.innerHTML = `The current background color is ${colorPicker.value}`;
});

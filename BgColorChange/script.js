let buttons = document.querySelectorAll("button");
buttons.forEach((btns) => {
  btns.addEventListener("click", (event) => {
    let get = event.currentTarget.classList;
    if (get.contains("red")) {
      document.body.style.backgroundColor = "red";
      btns.style.backgroundColor = "white";
      btns.style.color = "black";
    } else if (get.contains("orange")) {
      document.body.style.backgroundColor = "orange";
      btns.style.backgroundColor = "white";
      btns.style.color = "black";
    }
  });
});
window.onclick = (e) => {
  if (e.target === body) {
    document.body.style.backgroundColor = "white";
  }
};

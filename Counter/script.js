var count = 0;

let btn = document.querySelectorAll("button");
btn.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    let style = e.currentTarget.classList;
    if (style.contains("i")) {
      count++;
    } else if (style.contains("d")) {
      count--;
    } else if (style.contains("r")) {
      count = 0;
    } else {
      count;
    }
    let display = document.getElementById("counter");
    display.innerHTML = `The Counter Value is : ${count}`;
  });
});

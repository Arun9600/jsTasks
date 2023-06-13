var count = 0;
let container = document.querySelector(".container");
container.style.width = "300px";
container.style.margin = "0 auto";
let heading = document.querySelector("h2");
heading.style.marginTop = "40px";
let btn = document.querySelectorAll("button");
btn.forEach((btns) => {
  btns.style.backgroundColor = "green";
  btns.style.padding = "10px 20px";
  btns.style.color = "#fff";
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

let aCount = document.getElementById("aCount");
aCount.style.textAlign = "center";
let counter = () => {
  let newValue = aCount.innerHTML;
  newValue++;
  aCount.innerHTML = newValue;
};
setInterval(counter, 1000);

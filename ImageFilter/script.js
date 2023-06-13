let taB = document.querySelector(".galleryTabs");
taB.style.textAlign = "center";
let gContainer = document.querySelector(".gallery_container");
gContainer.style.display = "flex";
gContainer.style.flexWrap = "wrap";
gContainer.style.flexDirection = "row";
let container = document.querySelector(".container");
container.style.width = "1320px";
container.style.margin = "0 auto";
let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.style.backgroundColor = "aqua";
  btn.style.color = "#000";
  btn.style.padding = "10px 15px";
  btn.style.border = "none";
  btn.style.boxShadow = "none";
  btn.style.borderRadius = "12px";
  btn.style.margin = "25px";
  btn.style.cursor = "pointer";
});
let itemsImage = document.querySelectorAll(".item img");
itemsImage.forEach((itemImage) => {
  itemImage.style.width = "300px";
  itemImage.style.height = "300px";
  itemImage.style.padding = "15px";
});
let itemShow = document.querySelectorAll(".item.show");
itemShow.forEach((show) => {
  show.style.display = "block";
});
let itemHide = document.querySelectorAll(".item.hide");
itemHide.forEach((hide) => {
  hide.style.display = "none";
});
let filter = document.querySelectorAll(".item");
taB.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-item")) {
    taB.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    let filterValue = e.target.getAttribute("data-filter");
    filter.forEach((items) => {
      if (items.classList.contains(filterValue) || filterValue === "all") {
        items.classList.remove("hide");
        items.classList.add("show");
      } else {
        items.classList.remove("show");
        items.classList.add("hide");
      }
    });
  }
});

let taB = document.querySelector(".galleryTabs");
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

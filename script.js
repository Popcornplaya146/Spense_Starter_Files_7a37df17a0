const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("list-items");

hamburger. addEventListener("click", () => {
  menu.classList.toggle("active");
});
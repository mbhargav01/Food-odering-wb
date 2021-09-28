const a = document.querySelector(".hamburger");
const b = document.querySelector(".nav-links");
const c = document.querySelector("p");

a.addEventListener("click", () => {
  b.classList.toggle("open");
});

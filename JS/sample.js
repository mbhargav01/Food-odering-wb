let btn = document.getElementById("food-btn");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {
  overlay.style.display = "grid";
  overlay.classList.add("animate-overlay");
});

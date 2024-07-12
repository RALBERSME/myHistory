const ask = document.getElementById("ask");

ask.addEventListener("mousemove", () => {
  ask.style.color = "orangered";
  ask.textContent = "click to establish wireless contact with the captain";
});
ask.addEventListener("click", () => {
  ask.style.color = "orange";
  ask.style.fontStyle = "italic";
  ask.textContent = "Unable to contact S.S. Bremen. Please try again later.";
});

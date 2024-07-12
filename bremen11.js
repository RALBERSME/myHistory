const ask = document.getElementById("ask");

ask.addEventListener("mousemove", () => {
  ask.textContent = "click to establish wireless contact with the captain";
});
ask.addEventListener("click", () => {
  ask.style.fontStyle = "italic";
  ask.textContent =
    "« Arrival slightly delayed due to bad weather. Will keep you updated. Ahrens. »";
});

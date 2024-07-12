const rainyContainer = document.getElementById("rainy-container");

function createRaindrop() {
  const raindrop = document.createElement("div");
  raindrop.classList.add("raindrop");

  const x = Math.floor(Math.random() * rainyContainer.offsetWidth);

  raindrop.style.left = `${x}px`;

  rainyContainer.appendChild(raindrop);
}

setInterval(createRaindrop, 95);

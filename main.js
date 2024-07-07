let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.onload = function () {
  canvas = document.getElementById("canvas1");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
};

window.addEventListener("resize", function () {
  this.cancelAnimationFrame(flowFieldAnimation);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
});

const mouse = {
  x: 0,
  y: 0,
};

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;

    this.#ctx.lineWidth = 1;
    this.#width = width;
    this.#height = height;
    this.lastTime = 0;
    this.interval = 1000 / 70;
    this.timer = 0;

    this.cellSize = 12;
    this.gradient;
    this.#createGradient();
    this.#ctx.strokeStyle = this.gradient;
    this.radius = 0;

    this.vr = 0.03;
  }
  #createGradient() {
    this.gradient = this.#ctx.createLinearGradient(
      0,
      0,
      this.#width,
      this.#height
    );
    this.gradient.addColorStop("0.1", "#4535C1");
    this.gradient.addColorStop("0.2", "#478CCF");
    this.gradient.addColorStop("0.4", "#36C2CE");
    this.gradient.addColorStop("0.6", "#77E4C8");
    this.gradient.addColorStop("0.9", "#4535C1");
    this.gradient.addColorStop("0.8", "#478CCF");
    this.gradient.addColorStop("0.7", "#36C2CE");
  }
  #drawLine(angle, x, y) {
    let positionX = x;
    let positionY = y;
    let dx = mouse.x - positionX;
    let dy = mouse.y - positionY;
    let distance = dx * dx + dy * dy;
    let length = distance / 10000;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(
      x + Math.cos(angle) * length + 0.2,
      y + Math.sin(angle) * length + 0.2
    );
    this.#ctx.stroke();
  }

  animate(timeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    if (this.timer > this.interval) {
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      this.radius += this.vr;

      if (this.radius > 5 || this.radius < -5) this.vr * -1;

      for (let y = 0; y < this.#height; y += this.cellSize) {
        for (let x = 0; x < this.#width; x += this.cellSize) {
          const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
          this.#drawLine(angle, x, y);
        }
      }

      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }
    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}

let number = document.getElementById("number");
let count = 0;
const wheel = document.getElementById("wheel");
function countUp() {
  wheel.style.animation = "rotateWheel 36s 0s ease-in-out forwards";
  let counter = setInterval(function () {
    if (count < 36) {
      ++count;
      if (count < 10) {
        number.textContent = `0${count}`;
      } else {
        number.textContent = `${count}`;
      }
    } else {
      number.textContent = `36`;
      clearInterval(counter);
    }
  }, 1000);
}

wheel.addEventListener("mouseover", countUp);

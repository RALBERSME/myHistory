const myRange1 = document.getElementById("myRange1");
const myRange2 = document.getElementById("myRange2");
const myRange3 = document.getElementById("myRange3");
const myRange4 = document.getElementById("myRange4");
// const myRange5 = document.getElementById("myRange5");
const myRange6 = document.getElementById("myRange6");
const myRange7 = document.getElementById("myRange7");

setTimeout(() => {
  var count = 0;
  var tHnd = setInterval(function () {
    if (count == 64) clearInterval(tHnd);
    if (count >= 16) {
      myRange1.value = 16.52;
    } else {
      myRange1.value = count;
    }
    if (count >= 28) {
      myRange2.value = 28.58;
    } else {
      myRange2.value = count;
    }
    if (count >= 39) {
      myRange3.value = 39.11;
    } else {
      myRange3.value = count;
    }
    if (count >= 47) {
      myRange4.value = 47.5;
    } else {
      myRange4.value = count;
    }
    if (count >= 51) {
      myRange6.value = 51.54;
    } else {
      myRange6.value = count;
    }
    if (count >= 63) {
      myRange7.value = 63.91;
    } else {
      myRange7.value = count;
    }
    count++;
  }, 60);
}, 5000);

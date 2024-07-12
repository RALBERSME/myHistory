function changeMessage() {
  const message = document.querySelector(".info");
  message.style.animation = "rotateItem 4s 0s ease-in-out forwards";

  setTimeout(() => {
    const urgent = document.getElementById("urgent");
    urgent.style.color = "darkblue";
    urgent.textContent = `Urgent! - Instructions from from US Customs -`;
    const instructions = document.getElementById("instructions");
    instructions.setAttribute("style", "white-space: pre;");
    instructions.textContent = `President Roosevelt signed a new neutrality law today.\r\nAll ships of foreign nations leaving the country will be subjected to  a thorough search \r\nto see if they have weapons or contraband on board. \r\n \r\nTHERE WILL BE NO QUICK DEPARTURE.`;
    const comeOnboard = document.getElementById("comeOnboard");
    comeOnboard.classList.remove("hidden");
    const contactCustoms = document.getElementById("contactCustoms");
    contactCustoms.classList.add("hidden");
  }, 2000);
}

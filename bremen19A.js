const days = document.querySelector(".days");
const content = document.querySelector(".days > .content");

const hashes = new Map([
  ["first", "day1"],
  ["second", "day2"],
  ["third", "day3"],
  ["fourth", "day4"],
  ["fifth", "day5"],
  ["sixth", "day6"],
]);

const data = new Map([
  [
    "day1",
    {
      content:
        "<p>We drive at full speed and soon leave our pursuers behind.   <br/><br/>We are now in international waters. Heavy rain showers start and it quickly gets dark. The sea has become rough.  <br/><br/> We drive with the lights completely dimmed. If we see ships, we go in a detour so that we are not recognized.</p>",
    },
  ],
  [
    "day2",
    {
      content: `<p>The wind dies down a little and the sea calms down. Fog rolls in. We don't send any more radio messages. But our radio operators listen to the radio traffic of the other ships and immediately tell me anything worth knowing. In the afternoon the fog turns into a dusting of rain. 
     <br/><br/>
      At dinner I give instructions to ensure that the Bremen is prepared for an emergency. We must be in a position to burn and sink the Bremen quickly in an emergency and to get to lifeboats. 
     <br/><br/>
      The crew is divided into fire teams. Mattresses, wood and flammable material are collected and stacked on the lower decks to form fire pits that allow the fire to be quickly moved if we need to set the ship on fire. It is decided who will open which portholes in an emergency so that as much water as possible can flow into the ship. <br/><br/>Provisions for the lifeboats are put together, especially drinking water and wool blankets. A group is appointed to loosen the screws on the valve boxes in the pipe tunnel in the forecastle in the event of an emergency. This could cause even more water to enter the ship. The lifeboat engines are checked again. The work of destroying the ship is now well prepared.</p>`,
    },
  ],
  [
    "day3",
    {
      content:
        "<p>Visibility is only moderate, but we would like to sail even more unnoticed.  <br/><br/>At around 6 a.m., when it is already midday in Germany, we know that Germany has invaded Poland. Now we can't go back. The war has started for us as well. <br/><br/> At around midday we reach the eastern corner of Newfoundland. This is dangerous for us because there are a lot of fishermen there because of the fishing grounds. They could sail to their mother boat in their small fishing boat and our location would then be radioed to the whole world. We must prepare ourselves for this.  <br/><br/>We must listen to the radio and be alert so that we give all fishing boats a wide berth. This is not so easy because the Newfoundland fishing grounds are 250 miles long. <br/><br/> We are also thinking about how we are going to get to Germany. The shortest route goes around the northern tip of Scotland. But we can only sail this way as long as England has not declared war on Germany.  <br/><br/>We change course several times. The night is dark, but the sky is only moderately cloudy.  <br/><br/>The S. S. Bremen glides over the sea with its lights completely dimmed.</p>",
    },
  ],
  [
    "day4",
    {
      content:
        "<p>Around midday we get a surprise. One of our radio operators reports that an American warship is in radio contact with Newfoundland.  <br/><br/>From the newspapers we brought with us from New York, we know that the American Secretary of the Treasury, Mr. Morgenthau, is on board the Campbell. We continue to listen to the Campbell's radio traffic with the coastal station in Newfoundland. When we notice that the American ship is coming towards us from starboard (we can tell by the volume of the radio signals), we take a precautionary 20 degrees to port. <br/><br/> In the late afternoon, the bridge telephone tells us that there are columns of smoke from a steamer ahead. We change course again. <br/><br/> It is not until evening that we return to our original course.  <br/><br/>The tracks from Europe to Canada are now behind us. So we are no longer in danger of ships crossing from Europa to Canada.</p>",
    },
  ],
  [
    "day5",
    {
      content:
        "<p>Mr. Chamberlain has issued a two-hour ultimatum. Either Germany ceases hostilities against Poland or England considers itself to be at war with Germany. Germany refuses. I call the crew together and inform them. Now we must expect attacks from the air and from the sea.  <br/><br/>Additional lookout posts are being set up on the S. S. Bremen. Then we will take protective measures against air hazards. We will build a thick plank wall between the front edge of the wheelhouse and the compass, and fill the space between with sandbags. No machine gun shot will get through.  <br/><br/>In the event that our steering line to the stern of the steering engine room is destroyed, we will build a special steering position and lay a telephone line from the bridge there and set up an extra compass. We will use mattresses to protect the turbine shafts against air attacks. <br/><br/> Then the ship must be given a new look. We will paint the entire ship and the superstructure grey. The huge yellow areas will be painted over with an invisible grey. The ship's name on the bow, the home port on the stern, everything is painted over. <br/><br/> We check whether a route between Iceland and Greenland is possible.  Then we open the secret death telegram that we have with us and decipher the instructions. The order is to head for Murmansk, the northernmost ice-free naval port in the world. The crew is informed and looks for warm clothes to wear.</p>",
    },
  ],
  [
    "day6",
    {
      content:
        "<p>We change course towards Russia.  The fog is getting thicker and it is getting colder. The water is only 10 degrees and within three hours it drops by another degree. We are told of bright fires on the starboard side. We immediately turn off all engines. We must not be seen or heard. The fog helps with this. Time passes. Nothing moves.  We continue slowly, then at full speed again. The water temperature is soon down to only one degree. Our ship is not built for ice. We have to adjust our course. We sail along the Arctic Ocean. <br/><br/> It continues like this on September 5th.  On September 6th we are still surrounded by fog and rain. At around nine o'clock the lookout reports land ahead. That is the entrance to the Kola Fjord. Then we see a black plume of smoke. It must be a torpedo boat or a destroyer, but we cannot make out its nationality. But we are faster and even if the warship tries to adapt to our constantly changing course, we are still faster.  <br/><br/>Ten minutes later we know that it is a Russian warship. We return to our previous course. I had instructed our ship's tailor to sew a Russian flag. We now hoist this in the foredeck, where the national flag usually hangs.  We send a telegram to the port master of Murmansk. When we enter the Kola Bay, we report to our shipping company that we are safe.  <br/><br/>A Russian government boat approaches us and two naval officers come on board the S. S. Bremen. At 2:15 p.m. the S. S. Bremen anchors in Murmansk. The S. S. Bremen will remain here until December 10th, 1939.</p>",
    },
  ],
]);

days.addEventListener("click", function (event) {
  if (!event.target.id) return;
  update(event.target.id);
});

const update = (dayId) => {
  const currentDay = days.querySelector(".active");

  if (currentDay.id != dayId) {
    currentDay.classList.remove("active");
  }
  const selectedDay = document.getElementById(dayId);
  selectedDay.classList.add("active");

  const entry = data.get(dayId);

  if (entry) {
    history.pushState(null, "", entry.url);
    content.innerHTML = entry.content;
  }
};

(() => {
  const dayId = hashes.get(window.location.hash);
  if (dayId) update(dayId);
})();

/* your idea */
const idea = document.getElementById("idea");
const output = document.getElementById("output");
const ideaClass = document.querySelector(".idea");

function getNotes() {
  let ideas = JSON.parse(localStorage.getItem("idea") || "[]");
  let outputText = ``;
  ideas.forEach((idea) => {
    outputText += `${idea.content} <br><br>`;
  });
  output.style.width = "170px";
  output.style.display = "inline-block";
  output.style.overflow = "hidden";
  output.innerHTML = outputText;
}
getNotes();

function removeFromLocalStorage() {
  localStorage.removeItem("idea");
}

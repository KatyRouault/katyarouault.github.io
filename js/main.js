// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = "It was below freezing and snowing outside, so :insertx: went skiing. When they got to :inserty:, they realized it wasn't a big ski mountain with marshmellos, so then :insertx: :insertz:. Bob saw everything, and didn't know what to do because — :insertx: and Bob were getting married tomorrow and it was all ruined.";

const insertX = [
  "Mr. Hubby",
  "Fat Daddy",
  "Baby"
];

const insertY = [
  "The Sanddunes",
  "Mexico",
  "Farran Feild"
];

const insertZ = [
  "self imploaded",
  "turned into a jelly bean",
  "had a baby"
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText; // Start with the base story

  // Custom name replacement
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name); // Replace 'Bob' with the custom name
  }

  // Generate random items
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders in the story
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  // UK conversion
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14); // Convert pounds to stones (1 stone = 14 pounds)
    const temperature = Math.round((94 - 32) * 5 / 9); // Convert Fahrenheit to Celsius
    newStory = newStory.replace(/300 pounds/g, weight + ' stone');
    newStory = newStory.replace(/94 fahrenheit/g, temperature + ' centigrade');
  }

  // Update the story text and make it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

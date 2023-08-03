/**
 * Greets the visitor with a random hello.
 */
function greet(firstVisit) {
  const greetingText = document.getElementById("greeting-text");
  const greetings = [
    "Hello",
    "Hi",
    "Howdy",
    "Bonjour",
    "Hiya",
    "Greetings",
    "Howdy-do",
    "Cheers",
    "Hey",
    "Heyyy",
    "Ahoy",
    "G’day",
    "Heya",
  ];

  let greeting;
  if (firstVisit) {
    greeting = greetings[Math.floor(Math.random() * greetings.length)];
  } else {
    greeting = "Hey, you again";
  }
  greetingText.innerHTML = greeting;
}

/**
 * Waves the hand emoji.
 */
function wave() {
  const greetingWave = document.getElementById("greeting-wave");
  greetingWave.classList.add("wave"); // add animation class to element
}

/**
 * On page load, greet with a message depending on if
 * this is the first visit with a wave animation.
 */
if (document.cookie == "HasVisited=true") {
  greet(false);
} else {
  document.cookie = "HasVisited=true";
  greet(true);
}
wave();

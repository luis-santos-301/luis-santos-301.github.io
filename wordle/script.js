const grid = document.querySelector('.grid');
for (let i = 0; i < 30; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
let word = "";
let currentrow = 0;
let currentcol = 0;
let guess = "";

const wordList = [
  "apple", "brisk", "crane", "doubt", "eagle", "flame", "grape", "honey",
  "ivory", "jelly", "knife", "lemon", "mango", "noble", "ocean", "pride",
  "queen", "robot", "stone", "tiger", "uncle", "vivid", "whale", "xenon", // maybe use a external list soon
  "yacht", "zebra", "angle", "beach", "cabin", "delta", "elite", "flood",
  "glide", "habit", "index", "jolly", "karma", "laser", "magic", "nasty",
  "orbit", "piano", "quiet", "raven", "scarf", "trend", "urban", "voter",
  "woven", "yield", "zesty", "altar", "blame", "climb", "diner", "event",
  "fable", "greet", "hover", "input", "jokes", "kneel", "lunar", "march",
  "niche", "oxide", "plush", "quirk", "reign", "shiny", "theme", "unity",
  "vigor", "wrist", "young", "azure", "bingo", "chess", "dream", "elite",
  "feast", "grasp", "hover", "image", "jumps", "knock", "latch", "mirth",
  "ninja", "olive", "punch", "quilt", "roast", "spine", "toxic", "ultra",
  "viral", "waltz", "xerox", "yodel", "zonal", "adapt", "bench", "clash",
  "dwarf", "essay", "flock", "grain", "haste", "infer", "jewel", "koala",
  "logic", "mixer", "novel", "opine", "pluck", "quake", "rover", "swirl",
  "table", "unify", "vexed", "woven", "yield", "zonal", "adorn", "basil",
  "crisp", "dandy", "enact", "fancy", "guild", "harpy", "idyll", "jaunt",
  "kayak", "lemma", "mover", "naive", "oaken", "plaza", "quirk", "rogue",
  "spurt", "tangy", "udder", "vigor", "wield", "xerox", "yacht", "zesty",
  "abbey", "blush", "cider", "dizzy", "elope", "flick", "glaze", "heist",
  "inert", "jumpy", "karma", "lodge", "mirth", "nerve", "ounce", "plump",
  "quirk", "rivet", "shook", "torus", "usher", "vapid", "wrath", "xenon",
  "yearn", "zilch", "argue", "brave", "cleat", "drift", "evoke", "flint",
  "gloom", "harsh", "imply", "jewel", "knack", "lunar", "motel", "nifty",
  "olden", "plaza", "quell", "revel", "sling", "torch", "usher", "vigor",
  "whirl", "xenon", "yodel", "zesty"
];


word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();


document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  if (currentrow >= 6) {
    alert("Game over. Word of the game was " + word);
    return; // Game over
  }
  const key = e.key.toUpperCase();

  if (key === "BACKSPACE" && currentcol > 0) {
    currentcol--;
    guess = guess.slice(0, -1);
    updateCell("");
  } else if (/^[A-Z]$/.test(key) && currentcol < 5) {
    guess += key;
    updateCell(key);
    currentcol++;
  } else if (key === "ENTER" && currentcol === 5) {
    checkGuess();
  }
}

function updateCell(char) {
  const index = currentrow * 5 + currentcol;
  cells[index].textContent = char;
}

function checkGuess() {
  const guessArray = guess.split("");
  const wordArray = word.split("");
  for (let i = 0; i < 5; i++) {
    const index = currentrow * 5 + i;
    const cell = cells[index];
    const letter = guessArray[i];

    if (letter === wordArray[i]) {
      cell.style.backgroundColor = "#538d4e"; // Green
    } else if (wordArray.includes(letter)) {
      cell.style.backgroundColor = "#b59f3b"; // Yellow
    } else {
      cell.style.backgroundColor = "#3a3a3c"; // Gray
    }

    cell.style.borderColor = "#000";
  }
  if (guess === word) {
  alert("You Won");
  document.removeEventListener("keydown", handleKeyPress); 
  return;
}
  currentrow++;
  currentcol = 0;
  guess = "";
}



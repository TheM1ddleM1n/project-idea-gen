const ideas = {
  python: [
    "Build a file organizer that automatically sorts files by type.",
    "Create a chatbot that answers questions from a predefined list.",
    "Make a password strength checker with visual feedback.",
    "Build a CLI tool that renames multiple files at once.",
    "Create a script that tracks your daily screen time.",
    "Build a PDF merger tool using Python libraries.",
    "Create a simple AI that recommends movies based on genre.",
    "Make a program that converts text into Morse code.",
    "Build a terminal-based calculator with history.",
    "Create a script that monitors folder changes in real time."
  ],
  web: [
    "Build a personal portfolio website with subtle animations.",
    "Create a weather app using a public API.",
    "Make a responsive landing page for a fictional product.",
    "Build a color palette generator with copy-to-clipboard.",
    "Create a minimal blog layout using only HTML and CSS.",
    "Build a random quote generator with fade animations.",
    "Create a simple notes app using localStorage.",
    "Make a responsive image gallery with filters.",
    "Build a countdown timer for events.",
    "Create a random emoji generator with categories."
  ],
  games: [
    "Create a Snake game with power-ups.",
    "Build a memory matching card game.",
    "Make a clicker game with upgrades and achievements.",
    "Create a 2D dodging game with falling objects.",
    "Build a quiz game with categories and scoring.",
    "Create a rock-paper-scissors game with animations.",
    "Make a typing speed test with WPM tracking.",
    "Build a simple platformer with 3–5 levels.",
    "Create a reaction-time tester game.",
    "Make a number guessing game with hints."
  ],
  tools: [
    "Build a to-do list app with localStorage.",
    "Create a study timer (Pomodoro).",
    "Make a random username generator.",
    "Build an expense tracker with charts.",
    "Create a markdown previewer.",
    "Make a URL shortener (front-end only).",
    "Build a QR code generator.",
    "Create a habit tracker with streaks.",
    "Make a simple file encryption/decryption tool.",
    "Build a browser-based stopwatch with laps."
  ]
};

const categorySelect = document.getElementById("category");
const ideaBox = document.getElementById("idea-box");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const statusEl = document.getElementById("status");
const favBtn = document.getElementById("fav-btn");
const favList = document.getElementById("fav-list");
const clearFavBtn = document.getElementById("clear-fav");
const surpriseBtn = document.getElementById("surprise-btn");

const FAV_KEY = "pig-favourites";

let currentIdea = "";

// Helpers

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomCategoryKey() {
  const keys = Object.keys(ideas);
  return getRandomItem(keys);
}

function animateIdeaBox() {
  ideaBox.classList.remove("active");
  void ideaBox.offsetWidth; // force reflow
  ideaBox.classList.add("active");
}

// Idea generation

function generateIdea(randomCategory = false) {
  let category = categorySelect.value;

  if (randomCategory || category === "random") {
    category = getRandomCategoryKey();
  }

  const list = ideas[category];
  if (!list || list.length === 0) {
    ideaBox.textContent = "No ideas available for this category yet.";
    ideaBox.classList.remove("active");
    statusEl.textContent = "";
    currentIdea = "";
    favBtn.classList.remove("active");
    return;
  }

  const idea = getRandomItem(list);
  currentIdea = idea;

  ideaBox.innerHTML = `<p>${idea}</p>`;
  animateIdeaBox();

  const label = category.charAt(0).toUpperCase() + category.slice(1);
  statusEl.textContent = `Category: ${label}`;

  updateFavButtonState();
}

generateBtn.addEventListener("click", () => {
  generateIdea(false);
});

surpriseBtn.addEventListener("click", () => {
  generateIdea(true);
});

// Clipboard

copyBtn.addEventListener("click", async () => {
  const text = currentIdea.trim();
  if (!text) {
    statusEl.textContent = "Generate an idea first before copying.";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    statusEl.textContent = "Idea copied to clipboard ✅";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Could not copy. Your browser may not support clipboard access.";
  }
});

// Favourites

function loadFavourites() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveFavourites(list) {
  localStorage.setItem(FAV_KEY, JSON.stringify(list));
}

function renderFavourites() {
  const favs = loadFavourites();
  favList.innerHTML = "";

  if (favs.length === 0) {
    const li = document.createElement("li");
    li.className = "fav-empty";
    li.textContent = "No favourites yet. Save ideas you like ⭐";
    favList.appendChild(li);
    return;
  }

  favs.forEach((idea) => {
    const li = document.createElement("li");
    li.className = "fav-item";

    const bullet = document.createElement("span");
    bullet.className = "fav-bullet";
    bullet.textContent = "★";

    const text = document.createElement("span");
    text.className = "fav-text";
    text.textContent = idea;

    li.appendChild(bullet);
    li.appendChild(text);
    favList.appendChild(li);
  });
}

function updateFavButtonState() {
  const favs = loadFavourites();
  if (currentIdea && favs.includes(currentIdea)) {
    favBtn.classList.add("active");
    favBtn.textContent = "★";
  } else {
    favBtn.classList.remove("active");
    favBtn.textContent = "♡";
  }
}

favBtn.addEventListener("click", () => {
  if (!currentIdea) {
    statusEl.textContent = "Generate an idea before adding to favourites.";
    return;
  }

  const favs = loadFavourites();
  const index = favs.indexOf(currentIdea);

  if (index === -1) {
    favs.push(currentIdea);
    statusEl.textContent = "Added to favourites ⭐";
  } else {
    favs.splice(index, 1);
    statusEl.textContent = "Removed from favourites.";
  }

  saveFavourites(favs);
  renderFavourites();
  updateFavButtonState();
});

clearFavBtn.addEventListener("click", () => {
  const favs = loadFavourites();
  if (favs.length === 0) {
    statusEl.textContent = "No favourites to clear.";
    return;
  }

  localStorage.removeItem(FAV_KEY);
  renderFavourites();
  updateFavButtonState();
  statusEl.textContent = "Favourites cleared.";
});

// Init

renderFavourites();
updateFavButtonState();

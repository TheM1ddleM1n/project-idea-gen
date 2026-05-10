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
    "Create a script that monitors folder changes in real time.",
    "Build a web scraper that saves results to a CSV file.",
    "Create a currency converter using a live exchange rate API.",
    "Make a typing speed test in the terminal.",
    "Build a Pomodoro timer with desktop notifications.",
    "Create a tool that generates secure passwords.",
    "Build a news headline fetcher using RSS feeds.",
    "Make a budget tracker that reads from a CSV.",
    "Create an image resizer that batch-processes a folder.",
    "Build a flashcard quiz app in the terminal.",
    "Make a port scanner using the socket library.",
    "Create a Wikipedia summary CLI tool.",
    "Build a voice-to-text transcription script.",
    "Make a duplicate file finder and remover.",
    "Create a countdown timer with alert sounds.",
    "Build a simple HTTP server from scratch.",
    "Make a contact book stored in a JSON file.",
    "Create a unit converter (length, weight, temperature).",
    "Build a habit tracker that logs to a text file.",
    "Make a regex tester with live match highlighting.",
    "Create a random story generator using word lists."
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
    "Create a random emoji generator with categories.",
    "Build a CSS gradient generator with live preview.",
    "Make a browser-based kanban board.",
    "Create a font pairing tool with Google Fonts.",
    "Build a tip calculator with bill splitting.",
    "Make a live character and word counter.",
    "Create an avatar generator using CSS shapes.",
    "Build a quiz app with animated score tracking.",
    "Make a dark/light mode toggle with localStorage persistence.",
    "Create a recipe card layout builder.",
    "Build a browser-based drawing canvas.",
    "Make a music visualizer using the Web Audio API.",
    "Create a multi-step form with progress bar.",
    "Build a currency converter using a public API.",
    "Make a filterable product card grid.",
    "Create a sticky notes wall with drag support.",
    "Build an animated skills bar for a portfolio.",
    "Make a fake tweet/post card generator.",
    "Create a random background gradient wallpaper app.",
    "Build a typing animation hero section.",
    "Make a confetti animation triggered by a button."
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
    "Make a number guessing game with hints.",
    "Build a Wordle clone with 6 attempts.",
    "Create a Minesweeper game from scratch.",
    "Make a Pong clone with a basic AI opponent.",
    "Build a Tetris clone in the browser.",
    "Create a 2D maze generator and solver.",
    "Make a whack-a-mole game with increasing speed.",
    "Build a Simon Says memory game.",
    "Create a battleship game vs a CPU opponent.",
    "Make a breakout/Arkanoid clone.",
    "Build a top-down shooter with waves of enemies.",
    "Create a chess game with legal move highlighting.",
    "Make a blackjack card game with betting.",
    "Build a 15-puzzle (sliding tiles) game.",
    "Create a gravity sandbox with bouncing particles.",
    "Make a trivia game using the Open Trivia API."
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
    "Build a browser-based stopwatch with laps.",
    "Create a JSON formatter and validator.",
    "Build a base64 encoder/decoder.",
    "Make a regex tester with live match highlighting.",
    "Create a color contrast accessibility checker.",
    "Build a word frequency analyser.",
    "Make a timezone world clock dashboard.",
    "Create a diff tool that highlights text changes.",
    "Build a lorem ipsum generator with options.",
    "Make a screen resolution and device info viewer.",
    "Create a unit converter widget.",
    "Build a simple invoice generator with PDF export.",
    "Make a bookmark manager with tags.",
    "Create a focus mode app that blocks distractions.",
    "Build a reading time estimator.",
    "Make a code snippet saver with syntax highlighting."
  ],
  ai: [
    "Build a sentiment analyser for user-submitted text.",
    "Create a chatbot using the OpenAI API.",
    "Make a text summariser using an LLM API.",
    "Build an image caption generator.",
    "Create a language detector for pasted text.",
    "Build a smart autocomplete text field.",
    "Make a keyword extractor from long articles.",
    "Create a mood journal that analyses entries.",
    "Build a recipe suggester based on ingredients.",
    "Make a fake vs real news classifier UI.",
    "Create a text-to-emoji translator.",
    "Build a study flashcard generator from pasted notes.",
    "Make a code explainer that describes what code does.",
    "Create a pet name generator using an LLM.",
    "Build a resume bullet point improver.",
    "Make a debate argument generator (for and against).",
    "Create an AI-powered rhyme and lyric helper.",
    "Build a difficulty estimator for coding problems.",
    "Make a story idea expander from a single sentence.",
    "Create a daily affirmation generator."
  ],
  mobile: [
    "Build a React Native step counter app.",
    "Create a mobile flashcard app with swipe gestures.",
    "Make a habit tracker with push notifications.",
    "Build a barcode scanner app.",
    "Create a local-first notes app with offline support.",
    "Make a water intake reminder app.",
    "Build a split-bill calculator app.",
    "Create a voice memo recorder and player.",
    "Make a simple budgeting app with categories.",
    "Build a workout log with sets, reps, and weights.",
    "Create a sleep tracker with alarm features.",
    "Make a plant watering reminder app.",
    "Build a minimal journal app with daily prompts.",
    "Create a flashlight and colour torch app.",
    "Make a multi-timer app for cooking.",
    "Build a contacts backup viewer.",
    "Create a foreign language phrase book app.",
    "Make a dice roller for tabletop games.",
    "Build a tip and tax calculator.",
    "Create a configurable interval timer for workouts."
  ],
  api: [
    "Build a weather dashboard using the OpenWeatherMap API.",
    "Create a GitHub profile viewer using the GitHub API.",
    "Make a movie search app using the OMDB API.",
    "Build a lyrics finder using a music API.",
    "Create a NASA Astronomy Picture of the Day viewer.",
    "Make a country info explorer using the REST Countries API.",
    "Build a dictionary app using a free dictionary API.",
    "Create a stock price tracker using a finance API.",
    "Make a random dog/cat photo viewer.",
    "Build a timezone converter using a time API.",
    "Create a joke generator using a jokes API.",
    "Make a book search using the Open Library API.",
    "Build a cocktail recipe finder using TheCocktailDB.",
    "Create a Pokédex using the PokéAPI.",
    "Make a IP geolocation viewer.",
    "Build a news aggregator using a headlines API.",
    "Create a sports scores dashboard.",
    "Make a flight status tracker.",
    "Build a currency exchange history chart.",
    "Create a trivia game using the Open Trivia Database."
  ],
  cli: [
    "Build a CLI todo manager with file persistence.",
    "Create a terminal countdown timer with a sound.",
    "Make a CLI flashcard quiz tool.",
    "Build a notes manager with search and tags.",
    "Create a CLI password manager with encryption.",
    "Make a command-line weather reporter.",
    "Build a git commit message linter.",
    "Create a project scaffolding generator (like create-react-app).",
    "Make a CLI pomodoro timer.",
    "Build a bulk image converter in the terminal.",
    "Create a CLI expense logger.",
    "Make a terminal markdown viewer.",
    "Build a file watcher that runs a command on change.",
    "Create a CLI quiz that reads questions from a JSON file.",
    "Make a terminal-based calendar.",
    "Build a CLI tool to check a site's HTTP headers.",
    "Create a dotfiles manager.",
    "Make a CLI random name/team picker.",
    "Build a simple terminal RSS reader.",
    "Create a terminal ASCII art generator."
  ]
};

const difficultyMap = {
  "Build a file organizer that automatically sorts files by type.": "Beginner",
  "Create a chatbot that answers questions from a predefined list.": "Beginner",
  "Make a password strength checker with visual feedback.": "Beginner",
  "Build a CLI tool that renames multiple files at once.": "Beginner",
  "Create a script that tracks your daily screen time.": "Intermediate",
  "Build a PDF merger tool using Python libraries.": "Intermediate",
  "Create a simple AI that recommends movies based on genre.": "Intermediate",
  "Make a program that converts text into Morse code.": "Beginner",
  "Build a terminal-based calculator with history.": "Beginner",
  "Create a script that monitors folder changes in real time.": "Intermediate",
  "Build a web scraper that saves results to a CSV file.": "Intermediate",
  "Create a currency converter using a live exchange rate API.": "Beginner",
  "Make a typing speed test in the terminal.": "Intermediate",
  "Build a Pomodoro timer with desktop notifications.": "Beginner",
  "Create a tool that generates secure passwords.": "Beginner",
  "Build a news headline fetcher using RSS feeds.": "Intermediate",
  "Make a budget tracker that reads from a CSV.": "Beginner",
  "Create an image resizer that batch-processes a folder.": "Intermediate",
  "Build a flashcard quiz app in the terminal.": "Beginner",
  "Make a port scanner using the socket library.": "Advanced",
  "Create a Wikipedia summary CLI tool.": "Beginner",
  "Build a voice-to-text transcription script.": "Intermediate",
  "Make a duplicate file finder and remover.": "Intermediate",
  "Create a countdown timer with alert sounds.": "Beginner",
  "Build a simple HTTP server from scratch.": "Advanced",
  "Make a contact book stored in a JSON file.": "Beginner",
  "Create a unit converter (length, weight, temperature).": "Beginner",
  "Build a habit tracker that logs to a text file.": "Beginner",
  "Make a regex tester with live match highlighting.": "Intermediate",
  "Create a random story generator using word lists.": "Beginner",
  "Build a personal portfolio website with subtle animations.": "Beginner",
  "Create a weather app using a public API.": "Beginner",
  "Make a responsive landing page for a fictional product.": "Beginner",
  "Build a color palette generator with copy-to-clipboard.": "Beginner",
  "Create a minimal blog layout using only HTML and CSS.": "Beginner",
  "Build a random quote generator with fade animations.": "Beginner",
  "Create a simple notes app using localStorage.": "Beginner",
  "Make a responsive image gallery with filters.": "Intermediate",
  "Build a countdown timer for events.": "Beginner",
  "Create a random emoji generator with categories.": "Beginner",
  "Build a CSS gradient generator with live preview.": "Beginner",
  "Make a browser-based kanban board.": "Intermediate",
  "Create a font pairing tool with Google Fonts.": "Beginner",
  "Build a tip calculator with bill splitting.": "Beginner",
  "Make a live character and word counter.": "Beginner",
  "Create an avatar generator using CSS shapes.": "Intermediate",
  "Build a quiz app with animated score tracking.": "Intermediate",
  "Make a dark/light mode toggle with localStorage persistence.": "Beginner",
  "Create a recipe card layout builder.": "Intermediate",
  "Build a browser-based drawing canvas.": "Intermediate",
  "Make a music visualizer using the Web Audio API.": "Advanced",
  "Create a multi-step form with progress bar.": "Intermediate",
  "Build a currency converter using a public API.": "Beginner",
  "Make a filterable product card grid.": "Intermediate",
  "Create a sticky notes wall with drag support.": "Advanced",
  "Build an animated skills bar for a portfolio.": "Beginner",
  "Make a fake tweet/post card generator.": "Beginner",
  "Create a random background gradient wallpaper app.": "Beginner",
  "Build a typing animation hero section.": "Intermediate",
  "Make a confetti animation triggered by a button.": "Intermediate",
  "Create a Snake game with power-ups.": "Intermediate",
  "Build a memory matching card game.": "Beginner",
  "Make a clicker game with upgrades and achievements.": "Intermediate",
  "Create a 2D dodging game with falling objects.": "Intermediate",
  "Build a quiz game with categories and scoring.": "Beginner",
  "Create a rock-paper-scissors game with animations.": "Beginner",
  "Make a typing speed test with WPM tracking.": "Intermediate",
  "Build a simple platformer with 3–5 levels.": "Advanced",
  "Create a reaction-time tester game.": "Beginner",
  "Make a number guessing game with hints.": "Beginner",
  "Build a Wordle clone with 6 attempts.": "Intermediate",
  "Create a Minesweeper game from scratch.": "Intermediate",
  "Make a Pong clone with a basic AI opponent.": "Intermediate",
  "Build a Tetris clone in the browser.": "Advanced",
  "Create a 2D maze generator and solver.": "Advanced",
  "Make a whack-a-mole game with increasing speed.": "Beginner",
  "Build a Simon Says memory game.": "Beginner",
  "Create a battleship game vs a CPU opponent.": "Intermediate",
  "Make a breakout/Arkanoid clone.": "Intermediate",
  "Build a top-down shooter with waves of enemies.": "Advanced",
  "Create a chess game with legal move highlighting.": "Advanced",
  "Make a blackjack card game with betting.": "Intermediate",
  "Build a 15-puzzle (sliding tiles) game.": "Intermediate",
  "Create a gravity sandbox with bouncing particles.": "Advanced",
  "Make a trivia game using the Open Trivia API.": "Beginner",
  "Build a to-do list app with localStorage.": "Beginner",
  "Create a study timer (Pomodoro).": "Beginner",
  "Make a random username generator.": "Beginner",
  "Build an expense tracker with charts.": "Intermediate",
  "Create a markdown previewer.": "Beginner",
  "Make a URL shortener (front-end only).": "Intermediate",
  "Build a QR code generator.": "Beginner",
  "Create a habit tracker with streaks.": "Intermediate",
  "Make a simple file encryption/decryption tool.": "Advanced",
  "Build a browser-based stopwatch with laps.": "Beginner",
  "Create a JSON formatter and validator.": "Beginner",
  "Build a base64 encoder/decoder.": "Beginner",
  "Create a color contrast accessibility checker.": "Intermediate",
  "Build a word frequency analyser.": "Beginner",
  "Make a timezone world clock dashboard.": "Intermediate",
  "Create a diff tool that highlights text changes.": "Advanced",
  "Build a lorem ipsum generator with options.": "Beginner",
  "Make a screen resolution and device info viewer.": "Beginner",
  "Create a unit converter widget.": "Beginner",
  "Build a simple invoice generator with PDF export.": "Advanced",
  "Make a bookmark manager with tags.": "Intermediate",
  "Create a focus mode app that blocks distractions.": "Intermediate",
  "Build a reading time estimator.": "Beginner",
  "Make a code snippet saver with syntax highlighting.": "Intermediate",
  "Build a sentiment analyser for user-submitted text.": "Intermediate",
  "Create a chatbot using the OpenAI API.": "Beginner",
  "Make a text summariser using an LLM API.": "Beginner",
  "Build an image caption generator.": "Intermediate",
  "Create a language detector for pasted text.": "Intermediate",
  "Build a smart autocomplete text field.": "Intermediate",
  "Make a keyword extractor from long articles.": "Intermediate",
  "Create a mood journal that analyses entries.": "Intermediate",
  "Build a recipe suggester based on ingredients.": "Beginner",
  "Make a fake vs real news classifier UI.": "Advanced",
  "Create a text-to-emoji translator.": "Beginner",
  "Build a study flashcard generator from pasted notes.": "Intermediate",
  "Make a code explainer that describes what code does.": "Beginner",
  "Create a pet name generator using an LLM.": "Beginner",
  "Build a resume bullet point improver.": "Beginner",
  "Make a debate argument generator (for and against).": "Beginner",
  "Create an AI-powered rhyme and lyric helper.": "Intermediate",
  "Build a difficulty estimator for coding problems.": "Advanced",
  "Make a story idea expander from a single sentence.": "Beginner",
  "Create a daily affirmation generator.": "Beginner",
  "Build a React Native step counter app.": "Intermediate",
  "Create a mobile flashcard app with swipe gestures.": "Intermediate",
  "Make a habit tracker with push notifications.": "Intermediate",
  "Build a barcode scanner app.": "Intermediate",
  "Create a local-first notes app with offline support.": "Advanced",
  "Make a water intake reminder app.": "Beginner",
  "Build a split-bill calculator app.": "Beginner",
  "Create a voice memo recorder and player.": "Intermediate",
  "Make a simple budgeting app with categories.": "Beginner",
  "Build a workout log with sets, reps, and weights.": "Beginner",
  "Create a sleep tracker with alarm features.": "Intermediate",
  "Make a plant watering reminder app.": "Beginner",
  "Build a minimal journal app with daily prompts.": "Beginner",
  "Create a flashlight and colour torch app.": "Beginner",
  "Make a multi-timer app for cooking.": "Beginner",
  "Build a contacts backup viewer.": "Intermediate",
  "Create a foreign language phrase book app.": "Beginner",
  "Make a dice roller for tabletop games.": "Beginner",
  "Build a tip and tax calculator.": "Beginner",
  "Create a configurable interval timer for workouts.": "Beginner",
  "Build a weather dashboard using the OpenWeatherMap API.": "Beginner",
  "Create a GitHub profile viewer using the GitHub API.": "Beginner",
  "Make a movie search app using the OMDB API.": "Beginner",
  "Build a lyrics finder using a music API.": "Intermediate",
  "Create a NASA Astronomy Picture of the Day viewer.": "Beginner",
  "Make a country info explorer using the REST Countries API.": "Beginner",
  "Build a dictionary app using a free dictionary API.": "Beginner",
  "Create a stock price tracker using a finance API.": "Intermediate",
  "Make a random dog/cat photo viewer.": "Beginner",
  "Build a timezone converter using a time API.": "Beginner",
  "Create a joke generator using a jokes API.": "Beginner",
  "Make a book search using the Open Library API.": "Beginner",
  "Build a cocktail recipe finder using TheCocktailDB.": "Beginner",
  "Create a Pokédex using the PokéAPI.": "Beginner",
  "Make a IP geolocation viewer.": "Beginner",
  "Build a news aggregator using a headlines API.": "Intermediate",
  "Create a sports scores dashboard.": "Intermediate",
  "Make a flight status tracker.": "Intermediate",
  "Build a currency exchange history chart.": "Intermediate",
  "Create a trivia game using the Open Trivia Database.": "Beginner",
  "Build a CLI todo manager with file persistence.": "Beginner",
  "Create a terminal countdown timer with a sound.": "Beginner",
  "Make a CLI flashcard quiz tool.": "Beginner",
  "Build a notes manager with search and tags.": "Intermediate",
  "Create a CLI password manager with encryption.": "Advanced",
  "Make a command-line weather reporter.": "Beginner",
  "Build a git commit message linter.": "Intermediate",
  "Create a project scaffolding generator (like create-react-app).": "Advanced",
  "Make a CLI pomodoro timer.": "Beginner",
  "Build a bulk image converter in the terminal.": "Intermediate",
  "Create a CLI expense logger.": "Beginner",
  "Make a terminal markdown viewer.": "Intermediate",
  "Build a file watcher that runs a command on change.": "Intermediate",
  "Create a CLI quiz that reads questions from a JSON file.": "Beginner",
  "Make a terminal-based calendar.": "Intermediate",
  "Build a CLI tool to check a site's HTTP headers.": "Beginner",
  "Create a dotfiles manager.": "Advanced",
  "Make a CLI random name/team picker.": "Beginner",
  "Build a simple terminal RSS reader.": "Intermediate",
  "Create a terminal ASCII art generator.": "Intermediate"
};

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const ideaBox = document.getElementById("idea-box");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const shareBtn = document.getElementById("share-btn");
const statusEl = document.getElementById("status");
const favBtn = document.getElementById("fav-btn");
const favList = document.getElementById("fav-list");
const favCount = document.getElementById("fav-count");
const clearFavBtn = document.getElementById("clear-fav");
const favSearch = document.getElementById("fav-search");
const categoryPill = document.getElementById("category-pill");

const FAV_KEY = "pig-favourites";

let currentIdea = "";
let currentCategory = "";
let lastIdea = "";

function getRandomItem(arr) {
  if (arr.length === 1) return arr[0];
  let pick;
  do { pick = arr[Math.floor(Math.random() * arr.length)]; } while (pick === lastIdea);
  lastIdea = pick;
  return pick;
}

function getRandomCategoryKey() {
  const keys = Object.keys(ideas);
  return getRandomItem(keys);
}

function animateIdeaBox() {
  ideaBox.classList.remove("active");
  void ideaBox.offsetWidth;
  ideaBox.classList.add("active");
}

let statusTimer = null;
function setStatus(msg) {
  statusEl.textContent = msg;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => { statusEl.textContent = ""; }, 3000);
}

function getDifficultyClass(level) {
  if (level === "Beginner") return "diff-beginner";
  if (level === "Intermediate") return "diff-intermediate";
  if (level === "Advanced") return "diff-advanced";
  return "";
}

function generateIdea(randomCategory = false) {
  let category = categorySelect.value;
  const difficulty = difficultySelect.value;

  if (randomCategory || category === "random") {
    category = getRandomCategoryKey();
  }

  let list = ideas[category];
  if (!list || list.length === 0) {
    ideaBox.innerHTML = `<p>No ideas available for this category yet.</p>`;
    ideaBox.classList.remove("active");
    setStatus("");
    currentIdea = "";
    currentCategory = "";
    categoryPill.textContent = "";
    categoryPill.className = "category-pill";
    favBtn.classList.remove("active");
    return;
  }

  if (difficulty !== "all") {
    const filtered = list.filter(i => difficultyMap[i] === difficulty);
    if (filtered.length > 0) list = filtered;
  }

  const idea = getRandomItem(list);
  currentIdea = idea;
  currentCategory = category;

  const label = category.charAt(0).toUpperCase() + category.slice(1);
  const level = difficultyMap[idea] || "";

  ideaBox.innerHTML = `<p>${idea}</p>`;
  animateIdeaBox();

  categoryPill.textContent = `● ${label}`;
  categoryPill.className = `category-pill pill-${category}`;

  if (level) {
    const diffClass = getDifficultyClass(level);
    setStatus(`Difficulty: ${level}`);
    statusEl.className = `status ${diffClass}`;
    clearTimeout(statusTimer);
  } else {
    setStatus(`Category: ${label}`);
  }

  updateFavButtonState();
}

generateBtn.addEventListener("click", () => { generateIdea(false); });
categorySelect.addEventListener("change", () => { generateIdea(false); });

copyBtn.addEventListener("click", async () => {
  const text = currentIdea.trim();
  if (!text) { setStatus("Generate an idea first before copying."); return; }
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Idea copied to clipboard ✅");
  } catch (err) {
    console.error(err);
    setStatus("Could not copy. Your browser may not support clipboard access.");
  }
});

shareBtn.addEventListener("click", async () => {
  const text = currentIdea.trim();
  if (!text) { setStatus("Generate an idea first before sharing."); return; }
  if (navigator.share) {
    try {
      await navigator.share({ title: "Project Idea", text });
      setStatus("Shared successfully ✅");
    } catch (err) {
      if (err.name !== "AbortError") {
        await navigator.clipboard.writeText(text);
        setStatus("Idea copied to clipboard ✅");
      }
    }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Idea copied to clipboard ✅");
    } catch {
      setStatus("Could not share or copy.");
    }
  }
});

function loadFavourites() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function saveFavourites(list) {
  localStorage.setItem(FAV_KEY, JSON.stringify(list));
}

function updateFavCount() {
  const count = loadFavourites().length;
  favCount.textContent = count > 0 ? count : "";
}

function renderFavourites(filter = "") {
  const favs = loadFavourites();
  const term = filter.toLowerCase();
  const visible = term ? favs.filter(f => f.toLowerCase().includes(term)) : favs;
  favList.innerHTML = "";

  if (favs.length === 0) {
    const li = document.createElement("li");
    li.className = "fav-empty";
    li.textContent = "No favourites yet. Save ideas you like ⭐";
    favList.appendChild(li);
    return;
  }

  if (visible.length === 0) {
    const li = document.createElement("li");
    li.className = "fav-empty";
    li.textContent = "No favourites match your search.";
    favList.appendChild(li);
    return;
  }

  visible.forEach((idea) => {
    const li = document.createElement("li");
    li.className = "fav-item";

    const bullet = document.createElement("span");
    bullet.className = "fav-bullet";
    bullet.textContent = "★";

    const text = document.createElement("span");
    text.className = "fav-text";
    text.textContent = idea;

    const removeBtn = document.createElement("button");
    removeBtn.className = "fav-remove";
    removeBtn.textContent = "✕";
    removeBtn.title = "Remove";
    removeBtn.setAttribute("aria-label", `Remove: ${idea}`);

    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const all = loadFavourites();
      const idx = all.indexOf(idea);
      if (idx !== -1) all.splice(idx, 1);
      saveFavourites(all);
      renderFavourites(favSearch.value);
      updateFavButtonState();
      updateFavCount();
      setStatus("Removed from favourites.");
    });

    li.addEventListener("click", () => {
      currentIdea = idea;
      currentCategory = "";
      ideaBox.innerHTML = `<p>${idea}</p>`;
      animateIdeaBox();
      const level = difficultyMap[idea] || "";
      categoryPill.textContent = "";
      categoryPill.className = "category-pill";
      if (level) {
        const diffClass = getDifficultyClass(level);
        setStatus(`Difficulty: ${level}`);
        statusEl.className = `status ${diffClass}`;
        clearTimeout(statusTimer);
      } else {
        setStatus("Loaded from favourites.");
      }
      updateFavButtonState();
    });

    li.appendChild(bullet);
    li.appendChild(text);
    li.appendChild(removeBtn);
    favList.appendChild(li);
  });
}

function updateFavButtonState() {
  const favs = loadFavourites();
  if (currentIdea && favs.includes(currentIdea)) {
    favBtn.classList.add("active");
    favBtn.textContent = "★";
    favBtn.setAttribute("aria-label", "Remove from favourites");
  } else {
    favBtn.classList.remove("active");
    favBtn.textContent = "♡";
    favBtn.setAttribute("aria-label", "Add to favourites");
  }
}

favBtn.addEventListener("click", () => {
  if (!currentIdea) { setStatus("Generate an idea before adding to favourites."); return; }
  const favs = loadFavourites();
  const index = favs.indexOf(currentIdea);
  if (index === -1) {
    favs.push(currentIdea);
    setStatus("Added to favourites ⭐");
  } else {
    favs.splice(index, 1);
    setStatus("Removed from favourites.");
  }
  saveFavourites(favs);
  renderFavourites(favSearch.value);
  updateFavButtonState();
  updateFavCount();
});

clearFavBtn.addEventListener("click", () => {
  if (loadFavourites().length === 0) { setStatus("No favourites to clear."); return; }
  localStorage.removeItem(FAV_KEY);
  renderFavourites();
  updateFavButtonState();
  updateFavCount();
  setStatus("Favourites cleared.");
});

favSearch.addEventListener("input", () => {
  renderFavourites(favSearch.value);
});

renderFavourites();
updateFavButtonState();
updateFavCount();

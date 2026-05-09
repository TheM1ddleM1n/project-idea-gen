const ideas = {
  python: [
    "Build a file organizer that automatically sorts files into folders by type.",
    "Create a simple chatbot that answers basic questions from a predefined list.",
    "Make a password strength checker with visual feedback.",
    "Build a CLI tool that renames multiple files at once.",
    "Create a script that tracks your daily screen time on your PC."
  ],
  web: [
    "Build a personal portfolio website with a projects section.",
    "Create a weather app using a public weather API.",
    "Make a responsive landing page for a fictional product.",
    "Build a color palette generator with copy-to-clipboard.",
    "Create a minimal blog layout using only HTML and CSS."
  ],
  games: [
    "Create a Snake game with power-ups and a high-score system.",
    "Build a memory matching card game with increasing difficulty.",
    "Make a clicker game with upgrades and achievements.",
    "Create a simple 2D dodging game where objects fall from the top.",
    "Build a quiz game with categories and a score tracker."
  ],
  tools: [
    "Build a to-do list app that saves tasks in localStorage.",
    "Create a study timer (Pomodoro) with start/pause/reset.",
    "Make a random username generator with different styles.",
    "Build a simple expense tracker that stores data locally.",
    "Create a markdown previewer that renders formatted text."
  ]
};

const categorySelect = document.getElementById("category");
const ideaBox = document.getElementById("idea-box");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const statusEl = document.getElementById("status");
const themeToggle = document.getElementById("theme-toggle");

const THEME_KEY = "pig-theme";

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    setTheme("dark");
  }
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

initTheme();

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomCategoryKey() {
  const keys = Object.keys(ideas);
  return getRandomItem(keys);
}

function generateIdea() {
  let category = categorySelect.value;

  if (category === "random") {
    category = getRandomCategoryKey();
  }

  const list = ideas[category];
  if (!list || list.length === 0) {
    ideaBox.textContent = "No ideas available for this category yet.";
    ideaBox.classList.remove("active");
    statusEl.textContent = "";
    return;
  }

  const idea = getRandomItem(list);
  ideaBox.textContent = idea;
  ideaBox.classList.add("active");
  statusEl.textContent = `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}

generateBtn.addEventListener("click", () => {
  generateIdea();
});

copyBtn.addEventListener("click", async () => {
  const text = ideaBox.textContent.trim();
  if (!text || text.startsWith("Click “Generate")) {
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

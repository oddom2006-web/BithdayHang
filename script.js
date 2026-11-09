const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const againBtn = document.getElementById("againBtn");

openBtn.addEventListener("click", () => {
  openBtn.classList.add("hidden");
  surprise.classList.remove("hidden");
  makeConfetti();
});

againBtn.addEventListener("click", () => {
  surprise.classList.add("hidden");
  openBtn.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function makeConfetti() {
  const symbols = ["💗", "💕", "✨", "🌸", "🎀"];
  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 18) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8500);
  }
}

// Small floating hearts in the background
setInterval(() => {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 14) + "px";
  heart.style.animationDuration = (7 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 13000);
}, 1200);

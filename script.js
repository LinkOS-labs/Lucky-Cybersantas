// Loader simple
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 400);
  }
});

// Nieve 3D
const snowLayer = document.getElementById("snow-layer");
if (snowLayer) {
  for (let i = 0; i < 120; i++) {
    const f = document.createElement("div");
    f.className = "flake";
    const size = 3 + Math.random() * 9;
    f.style.width = size + "px";
    f.style.height = size + "px";
    f.style.left = Math.random() * 100 + "%";
    f.style.animationDuration = 5 + Math.random() * 10 + "s";
    f.style.animationDelay = Math.random() * 5 + "s";
    snowLayer.appendChild(f);
  }
}

// Luz que sigue al ratón
document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");
});

// Física simple para Santa flotando
const santa = document.getElementById("santa");
if (santa) {
  let vx = 0, vy = 0;
  let px = 0, py = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = (e.clientX - window.innerWidth / 2) * 0.03;
    targetY = (e.clientY - window.innerHeight / 2) * 0.03;
  });

  function tick() {
    vx += (targetX - px) * 0.02;
    vy += (targetY - py) * 0.02;

    px += vx;
    py += vy;

    vx *= 0.9;
    vy *= 0.9;

    santa.style.transform = `translate(${px}px, ${py}px)`;

    requestAnimationFrame(tick);
  }
  tick();
}

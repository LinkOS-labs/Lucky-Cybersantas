/* LOADER FIX */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  }, 800);
});

/* SNOW 3D GENERATOR */
const snow = document.getElementById("snow-layer");
if (snow) {
  for (let i = 0; i < 120; i++) {
    const f = document.createElement("div");
    f.className = "flake";
    const size = 3 + Math.random() * 9;
    f.style.width = size + "px";
    f.style.height = size + "px";
    f.style.left = Math.random() * 100 + "%";
    f.style.animationDuration = 5 + Math.random() * 10 + "s";
    snow.appendChild(f);
  }
}

/* LIGHT FOLLOW MOUSE */
document.addEventListener("mousemove", e => {
  document.documentElement.style.setProperty("--mx", e.clientX + "px");
  document.documentElement.style.setProperty("--my", e.clientY + "px");
});

/* SANTA FLOATING PHYSICS */
const santa = document.getElementById("santa");
if (santa) {
  let x = 0, y = 0, vx = 0, vy = 0, tx = 0, ty = 0;

  document.addEventListener("mousemove", e => {
    tx = (e.clientX - window.innerWidth / 2) * 0.03;
    ty = (e.clientY - window.innerHeight / 2) * 0.03;
  });

  function animate() {
    vx += (tx - x) * 0.02;
    vy += (ty - y) * 0.02;

    x += vx; 
    y += vy;

    vx *= 0.9;
    vy *= 0.9;

    santa.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animate);
  }
  animate();
}

// Main JavaScript - Ledger Loop Physical Design

document.addEventListener("DOMContentLoaded", () => {
  initForecastSimulator();
});

function initForecastSimulator() {
  const btnBaseline = document.getElementById("btn-baseline");
  const btnDelayed = document.getElementById("btn-delayed");
  const cashLine = document.getElementById("cash-trend-line");
  const deficitIcon = document.getElementById("deficit-icon");
  const announcer = document.getElementById("scenario-announcer");
  
  const headerWk7 = document.getElementById("header-wk7");
  const headerWk8 = document.getElementById("header-wk8");

  if (!btnBaseline || !btnDelayed || !cashLine) return;

  // Step paths for 1300x400 SVG
  // Normal stays above 60% (240px Y)
  const pathNormal = "M 0,100 L 200,100 L 200,150 L 600,150 L 600,180 L 1300,180";
  // Delayed drops to Y=280 at Week 7 (X=600 to X=800) which crosses the 240px line
  const pathDelayed = "M 0,100 L 200,100 L 200,150 L 500,150 L 500,280 L 800,280 L 800,180 L 1300,180";

  btnBaseline.addEventListener('click', () => {
    // Visuals
    btnBaseline.setAttribute("aria-pressed", "true");
    btnDelayed.setAttribute("aria-pressed", "false");
    
    cashLine.setAttribute("d", pathNormal);
    cashLine.classList.remove("deficit-mode");
    
    deficitIcon.classList.remove("visible");
    if (headerWk7) headerWk7.classList.remove("deficit");
    if (headerWk8) headerWk8.classList.remove("deficit");

    // Accessibility Announcement
    announcer.textContent = "Forecast updated to baseline scenario. All projected weeks remain safely above the deficit threshold.";
  });

  btnDelayed.addEventListener('click', () => {
    // Visuals
    btnDelayed.setAttribute("aria-pressed", "true");
    btnBaseline.setAttribute("aria-pressed", "false");
    
    cashLine.setAttribute("d", pathDelayed);
    cashLine.classList.add("deficit-mode");
    
    // Show icon after the transition delay (approx 500ms) unless reduced motion
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = isReducedMotion ? 0 : 500;
    
    setTimeout(() => {
      deficitIcon.classList.add("visible");
      if (headerWk7) headerWk7.classList.add("deficit");
      if (headerWk8) headerWk8.classList.add("deficit");
    }, delay);

    // Accessibility Announcement
    announcer.textContent = "Forecast updated to late payment scenario. Warning: Cash projection drops into deficit during Weeks 7 and 8.";
  });
}

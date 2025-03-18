function updateProgressBar(startTime, endTime, progressBarSelector, textSelector) {
  const progressBar = document.querySelector(progressBarSelector);
  const progressText = document.querySelector(textSelector);
  const now = new Date();

  const totalDuration = endTime - startTime;
  const elapsedTime = now - startTime;

  let progress = (elapsedTime / totalDuration) * 100;
  progress = Math.max(0, Math.min(progress, 100));

  progressBar.style.width = `${progress}%`;
  progressText.textContent = `In Progress ${progress.toFixed(2)}%`;

  if (progress < 100) {
    requestAnimationFrame(() => updateProgressBar(startTime, endTime, progressBarSelector, textSelector));
  }
}

// Example: Initialize both progress bars
const startDate = new Date("2025-03-16T19:50:00");
const endDate = new Date("2025-03-16T19:58:00");

updateProgressBar(startDate, endDate, ".loader_item_glowing", ".char-count");
updateProgressBar(startDate, endDate, ".new-progress-bar", ".progress-text");

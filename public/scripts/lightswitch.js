const modeToggleBtn = document.querySelector("button.mode-toggle");
const modeToggleBtnSVG = document.querySelector("button.mode-toggle svg path");
const offSVG =
  "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.75.75 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0M8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0M3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8m13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8m-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13m3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061M2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.75.75 0 0 1-.018 1.042.75.75 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z";
const onSVG =
  "M9.598 1.591a.75.75 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786m1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678";

let savedTheme = localStorage.getItem("theme");

//checks if browser has preferred theme set
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  !savedTheme
) {
  localStorage.setItem("theme", "dark-mode");
  savedTheme = "dark-mode";
}

modeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    modeToggleBtnSVG.setAttribute("d", offSVG);
    modeToggleBtn.setAttribute("aria-pressed", "true");
  } else {
    localStorage.setItem("theme", "light-mode");
    modeToggleBtnSVG.setAttribute("d", onSVG);
    modeToggleBtn.setAttribute("aria-pressed", "false");
  }
});

function getTheme() {
  console.log("savedtheme" + savedTheme);
  if (savedTheme === "dark-mode") {
    document.body.className = "";
    document.body.className = "dark-mode";
    modeToggleBtnSVG.setAttribute("d", offSVG);
    modeToggleBtn.setAttribute("aria-pressed", "true");
  }
}
getTheme();

const modeToggleBtn = document.querySelector("button.mode-toggle");
const modeToggleBtnSVG = document.querySelector("button.mode-toggle svg path");
const offSVG =
  "M19.4 1.6C19 1.2 18.5 1 18 1H6c-.5 0-1 .2-1.4.6S4 2.5 4 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h12c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M18 21H6V3h12zM8 6v12h8V6zm7 11H9V7h6zm-5-3h4v2h-4z";
const onSVG =
  "M8 6v12h8V6zm6 4h-4V8h4zm5.4-8.4C19 1.2 18.5 1 18 1H6c-.5 0-1 .2-1.4.6S4 2.5 4 3v18c0 .5.2 1 .6 1.4s.9.6 1.4.6h12c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V3c0-.5-.2-1-.6-1.4M18 21H6V3h12z";

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

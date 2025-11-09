const dialog = document.querySelector("dialog");
const dialogImg = document.querySelector("dialog img");
const thumbsArr = Array.from(document.querySelectorAll("button.thumb"));
const closeButton = document.querySelector("dialog button.close");

thumbsArr.forEach((thumb) => {
  const img = thumb.querySelector("img");
  const targetSrc = img.src;
  const targetAlt = img.alt;
  thumb.addEventListener("click", () => {
    dialogImg.src = targetSrc;
    dialogImg.alt = targetAlt;
    dialog.showModal();
  });
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

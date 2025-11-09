const dialog = document.querySelector("dialog");
const dialogImg = document.querySelector("dialog img");
const thumbsArr = Array.from(document.querySelectorAll("button.thumb"));
const closeButton = document.querySelector("dialog button.close");

console.log(thumbsArr[0].querySelector("img"));
// console.log(img)

function openLightbox(e) {
  const targetSrc = e.target.src;
  const targetAlt = e.target.alt;
  dialogImg.src = targetSrc;
  dialogImg.alt = targetAlt;
  dialog.showModal();
}

thumbsArr.forEach((thumb) => {
  const img = thumb.querySelector("img");
  const targetSrc = img.src;
  const targetAlt = img.alt;
  thumb.addEventListener("click", () => {
    dialogImg.src = targetSrc;
    dialogImg.alt = targetAlt;
    dialog.showModal();
    console.log("click");
  });
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

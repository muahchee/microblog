// got this script from here https://pqina.nl/blog/compress-image-before-upload/

const compressImage = async (file, { quality = 1, type = file.type }) => {
  // Get as image data
  const imageBitmap = await createImageBitmap(file);

  // Draw to canvas
  const canvas = document.createElement("canvas");
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imageBitmap, 0, 0);

  // Turn into Blob
  const blob = await new Promise((resolve) =>
    canvas.toBlob(resolve, type, quality)
  );

  // Turn Blob into File
  return new File([blob], file.name, {
    type: blob.type,
  });
};

// Get the selected file from the file input
const input = document.querySelector("#imgfile");
input.addEventListener("change", async (e) => {
  // Get the files
  const { files } = e.target;

  // No files selected
  if (!files.length) return;

  // We'll store the files in this data transfer object
  const dataTransfer = new DataTransfer();

  // For every file in the files list
  for (const file of files) {
    // We don't have to compress files that aren't images or are gifs
    if (!file.type.startsWith("image") || file.type.includes("gif")) {
      // Ignore this file, but do add it to our result
      dataTransfer.items.add(file);
      continue;
    }

    let compressedFile;

    // We compress the file by 50%
    if (file.type.includes("jpeg")) {
      compressedFile = await compressImage(file, {
        quality: 0.8,
        type: "image/jpeg",
      });
    } else if (file.type.includes("png")) {
      compressedFile = await compressImage(file, {
        quality: 0.8,
        type: "image/png",
      });
    }

    // Save back the compressed file instead of the original file
    dataTransfer.items.add(compressedFile);
  }

  // Set value of the file input to our new files list
  e.target.files = dataTransfer.files;
});

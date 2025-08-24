const button = document.querySelector(".upload_button");
const text = document.querySelector("span"); // fixed selector for text inside button

button.addEventListener("click", () => {
  button.classList.add("progress");
  text.innerText = "Uploading...";

  setTimeout(() => {
    button.classList.remove("progress"); // remove progress after 6s
    text.innerText = "Uploaded";
  }, 6000);
});

const dropZone = document.getElementById("drop-zone");
const previewImage = document.createElement("img"); // create preview image dynamically
previewImage.style.maxWidth = "300px";
previewImage.style.marginTop = "20px";
previewImage.style.display = "none";
dropZone.after(previewImage);

// highlight drop area on dragover
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#e0f7fa";
});

// reset style when leaving drop zone
dropZone.addEventListener("dragleave", () => {
  dropZone.style.backgroundColor = "#f1f8f9";
});

// handle file drop
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#f1f8f9";
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function () {
      previewImage.src = reader.result;
      previewImage.style.display = "block"; // show preview
    };
    reader.readAsDataURL(file);
  }
});

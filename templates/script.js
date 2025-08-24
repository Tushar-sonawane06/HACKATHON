// ===== Upload button animation =====
const button = document.querySelector(".upload_button");
const text = document.querySelector("span"); // text inside button

button.addEventListener("click", () => {
  button.classList.add("progress");
  text.innerText = "Uploading...";

  setTimeout(() => {
    button.classList.remove("progress"); // remove progress after 6s
    text.innerText = "Uploaded";
  }, 6000);
});

// ===== Drag-and-drop + preview =====
const dropZone = document.getElementById("drop-zone");
const previewImage = document.createElement("img"); // preview image
previewImage.style.maxWidth = "300px";
previewImage.style.marginTop = "20px";
previewImage.style.display = "none";
dropZone.after(previewImage);

// Highlight drop area
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#e0f7fa";
});

// Reset drop area style
dropZone.addEventListener("dragleave", () => {
  dropZone.style.backgroundColor = "#f1f8f9";
});

// Handle file drop
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#f1f8f9";
  const file = e.dataTransfer.files[0];
  if (file) {
    // preview for images
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    }

    // optionally: auto-upload file to Flask here
    // call /summarize via fetch() if needed
  }
});

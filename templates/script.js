const dropZone = document.getElementById("drop-zone");
const previewImage = document.createElement("img"); 
previewImage.style.maxWidth = "300px";
previewImage.style.marginTop = "20px";
previewImage.style.display = "none";
dropZone.after(previewImage);

// Highlight when dragging over
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#e0f7fa";
});

// Reset when leaving
dropZone.addEventListener("dragleave", () => {
  dropZone.style.backgroundColor = "#f1f8f9";
});

// Handle drop
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "#f1f8f9";
  const file = e.dataTransfer.files[0];

  if (file) {
    // Show file name + size
    const fileInfo = document.createElement("p");
    fileInfo.textContent = `File: ${file.name} (${Math.round(file.size / 1024)} KB)`;
    dropZone.appendChild(fileInfo);

    // Preview if image
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function () {
        previewImage.src = reader.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.style.display = "none";
    }

    // 🚀 Send file to backend
    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Upload success:", data);
      })
      .catch((err) => console.error("Upload error:", err));
  }
});

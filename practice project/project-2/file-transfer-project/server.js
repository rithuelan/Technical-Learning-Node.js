const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const refreshBtn = document.getElementById("refresh");
const fileList = document.getElementById("files");
const progressBar = document.getElementById("overallProgress");
const progressText = document.getElementById("progressText");

// ===================================
// UPLOAD FILES WITH PROGRESS
// ===================================
uploadBtn.onclick = async () => {
  const files = fileInput.files;
  if (!files.length) {
    alert("Select at least one file");
    return;
  }

  uploadBtn.disabled = true;
  progressBar.value = 0;
  progressText.innerText = "Starting upload...";

  for (let file of files) {
    await uploadSingleFile(file);
  }

  progressText.innerText = "Upload complete!";
  uploadBtn.disabled = false;

  loadFiles(); // Refresh list
};

// Upload single file using XHR
function uploadSingleFile(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/upload?name=" + encodeURIComponent(file.name));

    // Progress tracking
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        let percent = Math.round((e.loaded / e.total) * 100);
        progressBar.value = percent;
        progressText.innerText = `Uploading ${file.name} (${percent}%)`;
      }
    };

    xhr.onload = () => resolve();
    xhr.onerror = () => reject();

    xhr.send(file);
  });
}

// ===================================
// LIST FILES
// ===================================
refreshBtn.onclick = () => loadFiles();

async function loadFiles() {
  try {
    const res = await fetch("/list");
    const files = await res.json();   // array from server

    fileList.innerHTML = ""; // clear UI

    files.forEach(filename => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${filename}
        <button onclick="downloadFile('${filename}')">Download</button>
      `;
      fileList.appendChild(li);
    });

  } catch (err) {
    console.error("Failed to load file list:", err);
  }
}

// ===================================
// DOWNLOAD FILE
// ===================================
function downloadFile(name) {
  window.location = "/download/" + name;
}

// Load list on page start
loadFiles();

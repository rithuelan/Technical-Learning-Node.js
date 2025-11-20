const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const refreshBtn = document.getElementById("refresh");
const fileList = document.getElementById("files");
const progressBar = document.getElementById("overallProgress");
const progressText = document.getElementById("progressText");

// ======================
// UPLOAD FILES
// ======================
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

  loadFiles();  // Refresh list after upload
};

// Upload one file
function uploadSingleFile(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/upload?name=" + encodeURIComponent(file.name));

    // progress tracking
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

// ======================
// REFRESH LIST
// ======================
refreshBtn.onclick = () => loadFiles();

// list files from server
async function loadFiles() {
  const res = await fetch("/list");
  const list = await res.json();

  fileList.innerHTML = ""; // clear UI

  list.forEach(filename => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${filename}
      <button class="downloadBtn" onclick="downloadFile('${filename}')">Download</button>
    `;
    fileList.appendChild(li);
  });
}

// download file
function downloadFile(name) {
  window.location = "/download/" + name;
}

// Load files on page load
loadFiles();

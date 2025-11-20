showLoader(true);

fetch("/api/user")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err))
  .finally(() => {
    showLoader(false); // Hide loader no matter what
  });

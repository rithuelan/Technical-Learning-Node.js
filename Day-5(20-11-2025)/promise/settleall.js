// Mock external API request helper
function fakeApiRequest(serviceName, shouldFail = false, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${serviceName} API failed`);
      } else {
        resolve(`${serviceName} API success`);
      }
    }, delay);
  });
}

//user syncing function
async function syncUserData(user) {
  console.log(`Starting sync for user: ${user.name}`);

  const crmUpdate = fakeApiRequest("CRM Service", false, 1200);
  const emailUpdate = fakeApiRequest("Email Service", true, 800); // fails
  const analyticsUpdate = fakeApiRequest("Analytics Service", false, 1500);

  const results = await Promise.allSettled([
    crmUpdate,
    emailUpdate,
    analyticsUpdate
  ]);

  console.log("\n--- Sync Results ---");
  results.forEach((result, index) => {
    const serviceName = ["CRM", "Email", "Analytics"][index];

    if (result.status === "fulfilled") {
      console.log(`✔ ${serviceName} updated: ${result.value}`);
    } else {
      console.log(`✖ ${serviceName} failed: ${result.reason}`);
    }
  });

  console.log("\nUser sync completed.\n");
}

// Simulate calling this from an API endpoint 
syncUserData({ id: 42, name: "John Doe" });

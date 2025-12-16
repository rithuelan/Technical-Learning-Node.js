// subscriber.js
process.on("orderCreated", (data) => {
  console.log("Order received:", data);
});

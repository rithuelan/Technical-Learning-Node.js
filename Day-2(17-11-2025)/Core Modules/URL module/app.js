// app.js
// Node.js URL Module Demo

// Import the built-in URL module
const url = require("url");

// A sample website URL
const myURL = new URL("https://example.com:8080/products/item?category=books&price=499#details");

// Print the whole URL
console.log("Full URL:", myURL.href);

// Get different parts of the URL
console.log("Protocol:", myURL.protocol);   // https:
console.log("Host:", myURL.host);           // example.com:8080
console.log("Hostname:", myURL.hostname);   // example.com
console.log(" Port:", myURL.port);           // 8080
console.log(" Pathname:", myURL.pathname);   // /products/item
console.log("Hash:", myURL.hash);           // #details
console.log(" Search (query string):", myURL.search); // ?category=books&price=499

// Get query parameters one by one
console.log(" Category:", myURL.searchParams.get("category"));
console.log("Price:", myURL.searchParams.get("price"));

// Add or update query parameters
myURL.searchParams.append("discount", "10%");
console.log(" Updated URL:", myURL.href);

// Iterate through all query params
console.log("All Query Params:");
myURL.searchParams.forEach((value, key) => {
  console.log(`   ${key} = ${value}`);
});


//node app.js

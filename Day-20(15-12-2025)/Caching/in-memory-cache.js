// in-memory-cache.js
const cache = new Map();

function setCache(key, value, ttl = 5000) {
  cache.set(key, value);
  setTimeout(() => cache.delete(key), ttl); // auto-delete after TTL
}

function getCache(key) {
  return cache.get(key);
}

// Usage
setCache("user_1", { name: "Alice" });
console.log(getCache("user_1")); // { name: 'Alice' }

setTimeout(() => {
  console.log(getCache("user_1")); // undefined (expired)
}, 6000);

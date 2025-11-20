// From a string
const buf1 = Buffer.from("Hello World");
console.log(buf1);

// Fixed size, filled with zero
const buf2 = Buffer.alloc(10);
console.log(buf2);

// Unsafe (faster but contains old memory)
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

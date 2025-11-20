const buf = Buffer.from("HelloWorld");
const slice = buf.slice(0, 5);

console.log(slice.toString()); // Hello

slice[0] = 90; // modifies original buffer too!
console.log(buf.toString());   // ZelloWorld

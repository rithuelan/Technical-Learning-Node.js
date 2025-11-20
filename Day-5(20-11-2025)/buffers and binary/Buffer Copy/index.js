const src = Buffer.from("Hello");
const dest = Buffer.alloc(10);

src.copy(dest, 0);
console.log(dest.toString()); // Hello

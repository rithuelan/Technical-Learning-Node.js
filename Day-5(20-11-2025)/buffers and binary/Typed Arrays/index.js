const arr = new Uint8Array([65, 66, 67]);
const buf = Buffer.from(arr);

console.log(buf.toString()); // ABC

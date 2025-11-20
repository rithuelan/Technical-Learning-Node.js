const buf = Buffer.from("Hello Buffer");
const base64 = buf.toString("base64");

console.log(base64); 
console.log(Buffer.from(base64, "base64").toString());

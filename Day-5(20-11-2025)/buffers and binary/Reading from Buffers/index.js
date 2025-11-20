const buf = Buffer.from("ABCDEF");

console.log(buf[0]);      // 65
console.log(buf[1]);      // 66
console.log(buf.toString("utf8", 0, 3)); // ABC

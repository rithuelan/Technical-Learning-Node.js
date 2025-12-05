// lib/data.js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomName() {
  const first = ["Asha","Ravi","Priya","Arjun","Neha","Karan","Sara","Vikram","Isha","Rahul","Anita","Sandeep"];
  const last = ["Patel","Singh","Reddy","Kumar","Shah","Nair","Das","Gupta","Mehta","Iyer"];
  return `${first[Math.floor(Math.random()*first.length)]} ${last[Math.floor(Math.random()*last.length)]}`;
}
function randomEmail(name) {
  const domains = ["example.com","gmail.com","yahoo.com","hotmail.com"];
  const u = name.toLowerCase().replace(/\s+/g,".") + randomInt(1,999);
  return `${u}@${domains[Math.floor(Math.random()*domains.length)]}`;
}
function generateUser(i) {
  const name = randomName();
  return {
    username: `user_${Date.now()}_${i}`,
    name,
    email: randomEmail(name),
    age: randomInt(18, 60),
    createdAt: new Date()
  };
}
function generateUsers(n=50) {
  const arr = [];
  for (let i=0;i<n;i++) arr.push(generateUser(i));
  return arr;
}
module.exports = { generateUsers, generateUser };

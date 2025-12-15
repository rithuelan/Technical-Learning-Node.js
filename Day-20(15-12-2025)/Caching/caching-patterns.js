async function getUser(id) {
  let user = await client.get(`user:${id}`);
  if (user) return JSON.parse(user);

  // Simulate DB fetch
  user = { id, name: 'Alice' };
  await client.set(`user:${id}`, JSON.stringify(user), { EX: 60 }); // 1 min
  return user;
}

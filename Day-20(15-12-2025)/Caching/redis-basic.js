// redis-basic.js
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

// Set and Get key
await client.set('name', 'Alice', { EX: 10 }); // EX = TTL 10 seconds
const name = await client.get('name');
console.log(name); // Alice

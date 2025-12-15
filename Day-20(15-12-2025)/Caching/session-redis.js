// session-redis.js
import express from 'express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { createClient } from 'redis';

const RedisStore = connectRedis(session);
const redisClient = createClient();

await redisClient.connect();

const app = express();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 10 } // 10 minutes
  })
);

app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`Views: ${req.session.views}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));

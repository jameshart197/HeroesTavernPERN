import dotenv from 'dotenv';
import express from 'express';
import {users} from "../db/models/init-models";
import { sqlconnect } from './db/postgres';
import { mongoconnect } from './db/mongo';
const app = express();
const port = 3000;

dotenv.config();
sqlconnect();
mongoconnect().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    const allUsers = await users.findAll();
    res.send('Number of users:'+ allUsers.length);
} )

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
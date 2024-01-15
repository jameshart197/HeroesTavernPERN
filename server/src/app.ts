import dotenv from 'dotenv';
import express from 'express';
import { Sequelize } from 'sequelize';
import { initModels, users } from '../db/models/init-models';
const app = express();
const port = 3000;

dotenv.config();
const USER_DATABASE = new Sequelize(process.env.POSTGRES_URL as string, {
    pool:{
        max:3,
        min:0,
        acquire:30000,
        idle:10000
    }
});

initModels(USER_DATABASE);

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
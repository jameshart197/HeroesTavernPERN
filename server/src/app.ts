import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {users} from "../db/models/init-models";
import { sqlconnect } from './db/postgres';
import { mongoconnect } from './db/mongo';
import { MongoClient, ServerApiVersion } from 'mongodb';
const app = express();
const port = process.env.PORT||3000;

const mongoClient = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.json());
sqlconnect();
mongoconnect(mongoClient).catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/character', async (req, res) => {
    const collection = await mongoClient.db("heroestavern").collection("characters");
    const character = req.body;
    collection.insertOne(character);
    res.sendStatus(201);
})

app.get('/users', async (req, res) => {
    const allUsers = await users.findAll();
    res.send('Number of users:'+ allUsers.length);
} )

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
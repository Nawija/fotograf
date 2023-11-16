// db.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let connection;

const connectDatabase = async () => {
  if (!client) {
    client = new MongoClient(uri, options);
  }

  if (!client.isConnected()) {
    await client.connect();
  }

  connection = client.db('nextjs-mongodb');
  return connection;
};

export { connectDatabase };

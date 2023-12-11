const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('fitvibe');
const entryCollection = db.collection('leaderboard');
const userEnCollection = db.collection('user_entries');
const userCollection = db.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("connected");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

//inserts the entry into the leaderboard doc
async function addEntry(leaderboard) {
  const result = await entryCollection.insertOne(leaderboard);
  return result;
}

//inserts the user_e into the userEntries doc
async function addUserE(user_entries) {
    const result = await userEnCollection.insertOne(user_entries);
    return result;
}

//query the documents
function getLeaderboard() {
  const query = { calories: { $gt: 0 } };
  const options = {
    sort: { calories: -1 },
    //working
    limit: 10,
  };
  console.log("in getLeaderboard")
  const cursor = entryCollection.find(query, options);
  return cursor.toArray();
}



function getUserEntries(username) {
  console.log(username);
    const query = { username: username };
    const options = {
        sort: { datetime: -1 },
        //works
        //limit: 10,
    };
    console.log("in User Entries")
    const cursor = userEnCollection.find(query, options);
    return cursor.toArray();
}

module.exports = { 
  getUser,
  getUserByToken,
  createUser,
  addEntry, 
  getLeaderboard, 
  addUserE, 
  getUserEntries
};
    
   // addUserE, getUserEntries};
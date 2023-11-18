const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db1 = client.db('leaderboard');
const entryCollection = db1.collection('entry');
const db2 = client.db('userEntries');
const userCollection = db2.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db1.command({ ping: 1 });
  await db2.command({ ping: 1 });
  console.log("connected");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

//inserts the entry into the leaderboard doc
async function addEntry(entry) {
  const result = await entryCollection.insertOne(entry);
  return result;
}

//inserts the user_e into the userEntries doc
async function addUserE(users) {
    const result = await userCollection.insertOne(users);
    return result;
}

//query the documents
function getLeaderboard() {
  const query = { calories: { $gt: 0 } };
  const options = {
    sort: { calories: -1 },
    limit: 10,
  };
  console.log("in getLeaderboard")
  const cursor = entryCollection.find();
  return cursor.toArray();
}



function getUserEntries() {
    //const query = { username: Current_User }
    const options = {
        sort: { users: -1 }
    };
    console.log("in User Entries")
    const cursor = userCollection.find();
    return cursor.toArray();
}

module.exports = { addEntry, getLeaderboard, addUserE, getUserEntries};
    
   // addUserE, getUserEntries};
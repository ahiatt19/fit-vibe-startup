const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/entries', async (_req, res) => {
  const entries = await DB.getLeaderboard();
  res.send(entries);
});

apiRouter.get('/user_e/:username', async (_req, res) => {
  console.log(_req.params.username);
  const user_e = await DB.getUserEntries(_req.params.username);
  res.send(user_e);
});

// SubmitScore
apiRouter.post('/entry', async (req, res) => {
  DB.addEntry(req.body);
  const entries = await DB.getLeaderboard();
  //entries = updateEntries(req.body, entries);
  res.send(entries);
});

apiRouter.post('/userentry', async (req, res) => {
  DB.addUserE(req.body);
  const user_e = await DB.getUserEntries();
  //user_e = updateUserEntries(req.body, user_e);
  res.send(user_e);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('home.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// let entries = [];
// function updateEntries(newEntry, entries) {
//   let found = false;
//   for (const [i, prevEntry] of entries.entries()) {
//     if (+newEntry.calories > +prevEntry.calories) {
//       //console.log(newEntry.calories)
//       //console.log(prevEntry.calories)
//       entries.splice(i, 0, newEntry);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     entries.push(newEntry);
//   }

//   if (entries.length > 10) {
//     entries.length = 10;
//   }

//   return entries;
// }


// let user_e = [];
// function updateUserEntries(newUserEntry, user_e) {
//     let found = false;
//     for (const [i, prevEntry] of user_e.entries()) {
//       if (prevEntry.datetime < newUserEntry.datetime) {
//         user_e.splice(i, 0, newUserEntry);
//         found = true;
//         break;
//       }
//     }
//     //console.log(user_e)
//     if (!found) {
//       user_e.push(newUserEntry);
//     }
  
//     return user_e;
//   }
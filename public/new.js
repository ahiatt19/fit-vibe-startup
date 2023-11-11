const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getUserName();


function getUserName() {
    return localStorage.getItem('username');
  }


//function updateEntry(entry) {
  //const entryE1 = document.querySelector('#entry');
  //entryE1.textContent = entry;
//}

function saveForm() {
    //saves data to Local Storage
    const date = document.querySelector("#datetime");
    localStorage.setItem("datetime", dateE1.value.substring(0, 10));
    const calories = document.querySelector("#cals");
    localStorage.setItem("cals", caloriesE1.value);
    const wrkout = document.querySelector("#wrkout");
    localStorage.setItem("wrkout", wrkoutE1.value);
    const note = document.querySelector("#note");
    localStorage.setItem("note", noteE1.value)

    const userName = this.getUserName();
    const newEntry = {name: userName, calories: calories.value, workout: wrkout.value, note: note.value};
    const newUserEntry = {username: userName, datetime: dateE1.value.substring(0, 10), calories: caloriesE1.value, workout: wrkoutE1.value, note: noteE1.value};

    try {
      const response = fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newEntry),
      });

      // Store what the service gave us as the high scores
      const entries = response.json();
      localStorage.setItem('entries', JSON.stringify(entries));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newEntry);
      this.updateUserEntry(newUserEntry);
    }

    

    entries = this.updateEntriesLocal(newEntry);
    //console.log(entries)
    user_e = this.updateUserEntryLocal(newUserEntry);
    //console.log(entries)
    localStorage.setItem('entries', JSON.stringify(entries));
    localStorage.setItem('user_e', JSON.stringify(user_e))

    window.location.href = "leaderboard.html";
}

function updateEntriesLocal(NewEntry) {
  //const date = new Date().toLocaleDateString();

  let entries = [];
  const entriesText = localStorage.getItem('entries');
  if (entriesText) {
    entries = JSON.parse(entriesText);
  }

  let found = false;
  for (const [i, prevEntry] of entries.entries()) {
    if (+newEntry.calories > +prevEntry.calories) {
      //console.log(newEntry.calories)
      //console.log(prevEntry.calories)
      entries.splice(i, 0, newEntry);
      found = true;
      break;
    }
  }

  if (!found) {
    entries.push(newEntry);
  }

  if (entries.length > 10) {
    entries.length = 10;
  }

  localStorage.setItem('entries', JSON.stringify(entries));
}


function updateUserEntryLocal(newUserEntry) {
  user_e = [];
  const user_eText = localStorage.getItem('user_e');
  if (user_eText) {
    user_e = JSON.parse(user_eText);
  }


  let found = false;
  for (const [i, prevEntry] of user_e.entries()) {
    if (prevEntry.datetime < newUserEntry.datetime) {
      user_e.splice(i, 0, newUserEntry);
      found = true;
      break;
    }
  }
  //console.log(user_e)
  if (!found) {
    user_e.push(newUserEntry);
  }

  return user_e;
}
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
    const dateE1 = document.querySelector("#datetime");
    localStorage.setItem("datetime", dateE1.value);
    const caloriesE1 = document.querySelector("#cals");
    localStorage.setItem("cals", caloriesE1.value);
    const wrkoutE1 = document.querySelector("#wrkout");
    localStorage.setItem("wrkout", wrkoutE1.value);
    const noteE1 = document.querySelector("#note");
    localStorage.setItem("note", noteE1.value)


    const userName = this.getUserName();
    let entries = [];
    const entriesText = localStorage.getItem('entries');
    if (entriesText) {
      entries = JSON.parse(entriesText);
    }

    entries = this.updateEntries(userName, caloriesE1.value, wrkoutE1.value, noteE1.value, entries);
    //console.log(entries)


    user_e = [];
    const user_eText = localStorage.getItem('user_e');
    if (user_eText) {
      user_e = JSON.parse(user_eText);
    }
    
    
    
    user_e = this.updateUser_e(userName, dateE1.value, caloriesE1.value, wrkoutE1.value, noteE1.value, user_e);

    //console.log(entries)
    localStorage.setItem('entries', JSON.stringify(entries));
    localStorage.setItem('user_e', JSON.stringify(user_e))

    window.location.href = "leaderboard.html";
}

function updateEntries(userName, cals, wrkout, note, entries) {
  //const date = new Date().toLocaleDateString();
  const newEntry = { name: userName, calories: cals, workout: wrkout, note: note };

  let found = false;
  for (const [i, prevEntry] of entries.entries()) {
    if (+newEntry.calories > +prevEntry.calories) {
      console.log(newEntry.calories)
      console.log(prevEntry.calories)
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

  return entries;
}


function updateUser_e(userName, datetime, cals, workout, note, user_e) {
  const new_user_e = {username: userName, datetime: datetime, calories: cals, workout: workout, note: note};


  let found = false;
  for (const [i, prevEntry] of user_e.entries()) {
    if (prevEntry.datetime > datetime) {
      user_e.push(new_user_e);

      
      break;
    }
  }
  //console.log(user_e)
  if (!found) {
    user_e.push(new_user_e);
  }

  return user_e;
}
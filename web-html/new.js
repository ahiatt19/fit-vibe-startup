const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getUserName();


function getUserName() {
    return localStorage.getItem('username');
  }


function updateEntry(entry) {
  const entryE1 = document.querySelector('#entry');
  entryE1.textContent = entry;
}

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
    localStorage.setItem('entries', JSON.stringify(entries));
    

    window.location.href = "leaderboard.html";
}

function updateEntries(userName, cals, wrkout, note, entries) {
  //const date = new Date().toLocaleDateString();
  const newEntry = {name: userName, calories: cals, workout: wrkout, note: note};

  let found = false;
  for (const [i, prevEntry] of entries.entries()) {
    if (cals > prevEntry.cals) {
      console.log(preEntry)
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
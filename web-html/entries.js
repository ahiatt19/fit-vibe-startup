const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getUserName();


function getUserName() {
    return localStorage.getItem('username');
  }

function loadEntries() {
    entries = [];
    const entriesText = localStorage.getItem('entries')
    if (entriesText) {
        entries = JSON.parse(entriesText);
    }
    //console.log(entries)
    console.log("entries")
    const tableBodyE1 = document.querySelector('#entries');
    //console.log(tableBodyE1)
    

    if (entries.length) {
        for (const [i, entry] of entries.entries()) {
            const rankTdE1 = document.createElement('td');
            const usernameTdE1 = document.createElement('td');
            const caloriesTdE1 = document.createElement('td');
            const workoutTdE1 = document.createElement('td');
            const notesTdE1 = document.createElement('td');

            rankTdE1.textContent = i + 1;
            usernameTdE1.textContent = entry.name;
            caloriesTdE1.textContent = entry.calories;
            workoutTdE1.textContent = entry.workout;
            notesTdE1.textContent = entry.note;

            const rowEl = document.createElement('tr');

            rowEl.appendChild(rankTdE1);
            rowEl.appendChild(usernameTdE1);
            rowEl.appendChild(caloriesTdE1);
            rowEl.appendChild(workoutTdE1);
            rowEl.appendChild(notesTdE1);
            
            
            tableBodyE1.appendChild(rowEl);
        }

    } else {
        tableBodyE1.innerHTML = '<tr><td colSpan=5>Be the first to compete!</td></tr>';
    } 
}

loadEntries();
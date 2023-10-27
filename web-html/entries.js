const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getUserName();


function getUserName() {
    return localStorage.getItem('username');
  }

function loadEntries() {
    let entries = [];
    const entriesText = localStorage.getItem('entries')
    if (entriesText) {
        entries = JSON.parse(entriesText);
    }

    const tableBodyE1 = document.querySelector('#entries');
    //console.log(tableBodyE1)

    if (entries.length) {
        for (const [i, entry] of entries.entries()) {
            const rankTdE1 = document.createElement('td');
            const usernameTdE1 = document.createElement('td');
            const calTdE1 = document.createElement('td');
            const wrkoutTdE1 = document.createElement('td');
            const notesTdE1 = document.createElement('td');

            rankTdE1.textContent = i + 1;
            usernameTdE1.textContent = entry.name;
            calTdE1.textContent = entry.calories;
            wrkoutTdE1.textContent = entry.workout;
            notesTdE1.textContent = entry.note;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(rankTdE1);
            rowEl.appendChild(usernameTdE1);
            rowEl.appendChild(wrkoutTdE1);
            rowEl.appendChild(notesTdE1);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyE1.innerHTML = '<tr><td colSpan=5>Be the first to compete!</td></tr>';
    }
}

loadEntries();
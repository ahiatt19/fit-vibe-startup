const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getUserName();


function getUserName() {
    return localStorage.getItem('username');
  }


  function loadPastEntries() {
    let user_e = [];
    try {
        // Get the latest high scores from the service
        const response = fetch('/api/user_e');
        user_e = response.json();
    
        // Save the scores in case we go offline in the future
        localStorage.setItem('user_e', JSON.stringify(user_e));
      } catch {
        // If there was an error then just use the last saved scores
        const user_eText = localStorage.getItem('user_e');
        if (user_eText) {
            user_e = JSON.parse(user_eText);
        }
      }
    
    //console.log(entries)



    const tableBodyE2 = document.querySelector('#user_e');
    //console.log(tableBodyE1)
    if (user_e.length) {
        for (const [i, u_e] of user_e.entries()) {
            
            const userTdE1 = document.createElement('td');
            const dateTdE1 = document.createElement('td');
            const calTdE1 = document.createElement('td');
            const workTdE1 = document.createElement('td');
            const notTdE1 = document.createElement('td');

            
            userTdE1.textContent = u_e.username;
            dateTdE1.textContent = u_e.datetime;
            calTdE1.textContent = u_e.calories;
            workTdE1.textContent = u_e.workout;
            notTdE1.textContent = u_e.note;

            const rowE2 = document.createElement('tr');
            //console.log(rowE1);
            
            rowE2.appendChild(userTdE1);
            rowE2.appendChild(dateTdE1);
            rowE2.appendChild(calTdE1);
            rowE2.appendChild(workTdE1);
            rowE2.appendChild(notTdE1);
            

            tableBodyE2.appendChild(rowE2);
        }
    } else {
        tableBodyE2.innerHTML = '<tr><td colSpan=5>No entries have been made yet!</td></tr>';
    } 
}

function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}



loadPastEntries();
displayQuote();

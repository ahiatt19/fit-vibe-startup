const FormSubmit = 'formSubmit';
const UserLoggedIn = 'userLoggedIn';

class WebS {
  socket;

  constructor() {
    const playerNameEl = document.querySelector('.user-name');
    playerNameEl.textContent = this.getUserName();

    this.configureWebSocket();
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
      //socket.send('is this working?');
      this.socket.onopen = (event) => {
        this.displayMsg('system', '', 'connected');
        this.broadcastEvent(this.getUserName(), UserLoggedIn, {});
      };
      this.socket.onclose = (event) => {
        this.displayMsg('system', '', 'disconnected');
      };
      this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === FormSubmit) {
          this.displayMsg('user', msg.from, `burned ${msg.value.calories} calories`);
        } else if (msg.type === UserLoggedIn) {
          this.displayMsg('user', msg.from, `logged on`);
        }
      };
  }

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    //console.log(chatText.innerHTML)
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    console.log(this.socket);
    // socket.onopen = function(e) {
    //   socket.send(JSON.stringify(event));
    // }
    this.socket.send(JSON.stringify(event));
  }

  async saveForm() {
    //saves data to Local Storage
    const date = document.querySelector("#datetime");
    //localStorage.setItem("datetime", date.value.substring(0, 10));
    const calories = document.querySelector("#cals");
    //localStorage.setItem("cals", calories.value);
    const wrkout = document.querySelector("#wrkout");
    //localStorage.setItem("wrkout", wrkout.value);
    const note = document.querySelector("#note");
    //localStorage.setItem("note", note.value)


    const userName = this.getUserName();
    const newEntry = {name: userName, calories: parseFloat(calories.value), workout: wrkout.value, note: note.value};
    const newUserEntry = {username: userName, datetime: date.value.substring(0, 10), calories: parseFloat(calories.value), workout: wrkout.value, note: note.value};

    try {
      const response = await fetch('/api/entry', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newEntry),
      });

      //let username = localStorage.getItem('username');
      const response1 = await fetch('/api/userentry', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newUserEntry),
      });

      // Let other users know they submitted a entry
      //console.log(newEntry)
      this.broadcastEvent(this.getUserName(), FormSubmit, newEntry);
      //broadcastEvent(userName, formSubmit, newEntry);

      // Store what the service gave us as the high scores
      // const entries = await response.json();
      // localStorage.setItem('entries', JSON.stringify(entries));
      // const user_e = await response1.json();
      // localStorage.setItem('user_e', JSON.stringify(user_e));
    } catch {
      // If there was an error then just track scores locally
      this.updateEntriesLocal(newEntry);
      this.updateUserEntryLocal(newUserEntry);
    }

    // try {
    //  const response = await fetch('/userentry', {
    //    method: 'POST',
    //    headers: {'content-type': 'application/json'},
    //    body: JSON.stringify(newUserEntry),
    //  });
    //  //console.log('is this working')
    //  const user_e = await response.json();
    //  localStorage.setItem('user_e', JSON.stringify(user_e));
    // } catch {
    //  this.updateUserEntryLocal(newUserEntry);
    // }

    //console.log(entries)
    //user_e = this.updateUserEntryLocal(newUserEntry);
    //console.log(entries)

    window.location.href = "leaderboard.html";
  }

  updateEntriesLocal(newEntry) {
  //console.log('hitting this func')
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


  updateUserEntryLocal(newUserEntry) {
    let user_e = [];
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

    localStorage.setItem('user_e', JSON.stringify(user_e));
  }

}
const web = new WebS();

//window.socket = '';

// const playerNameEl = document.querySelector('.user-name');
// playerNameEl.textContent = this.getUserName();


// function getUserName() {
//     return localStorage.getItem('userName');
//   }

// broadcastEvent(getUserName(), UserLoggedIn, {});

//function updateEntry(entry) {
  //const entryE1 = document.querySelector('#entry');
  //entryE1.textContent = entry;
//}

// async function saveForm() {
//     //saves data to Local Storage
//     const date = document.querySelector("#datetime");
//     //localStorage.setItem("datetime", date.value.substring(0, 10));
//     const calories = document.querySelector("#cals");
//     //localStorage.setItem("cals", calories.value);
//     const wrkout = document.querySelector("#wrkout");
//     //localStorage.setItem("wrkout", wrkout.value);
//     const note = document.querySelector("#note");
//     //localStorage.setItem("note", note.value)


//     const userName = this.getUserName();
//     const newEntry = {name: userName, calories: parseFloat(calories.value), workout: wrkout.value, note: note.value};
//     const newUserEntry = {username: userName, datetime: date.value.substring(0, 10), calories: parseFloat(calories.value), workout: wrkout.value, note: note.value};

//     try {
//       const response = await fetch('/api/entry', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(newEntry),
//       });

//       //let username = localStorage.getItem('username');
//       const response1 = await fetch('/api/userentry', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(newUserEntry),
//       });

//       // Let other users know they submitted a entry
//       broadcastEvent(userName, formSubmit, newEntry);
//       //broadcastEvent(userName, formSubmit, newEntry);

//       // Store what the service gave us as the high scores
//       // const entries = await response.json();
//       // localStorage.setItem('entries', JSON.stringify(entries));
//       // const user_e = await response1.json();
//       // localStorage.setItem('user_e', JSON.stringify(user_e));
//     } catch {
//       // If there was an error then just track scores locally
//       this.updateEntriesLocal(newEntry);
//       this.updateUserEntryLocal(newUserEntry);
//     }

//     // try {
//     //  const response = await fetch('/userentry', {
//     //    method: 'POST',
//     //    headers: {'content-type': 'application/json'},
//     //    body: JSON.stringify(newUserEntry),
//     //  });
//     //  //console.log('is this working')
//     //  const user_e = await response.json();
//     //  localStorage.setItem('user_e', JSON.stringify(user_e));
//     // } catch {
//     //  this.updateUserEntryLocal(newUserEntry);
//     // }

//     //console.log(entries)
//     //user_e = this.updateUserEntryLocal(newUserEntry);
//     //console.log(entries)

//     window.location.href = "leaderboard.html";
// }

// function updateEntriesLocal(newEntry) {
//   //console.log('hitting this func')
//   //const date = new Date().toLocaleDateString();

//   let entries = [];
//   const entriesText = localStorage.getItem('entries');
//   if (entriesText) {
//     entries = JSON.parse(entriesText);
//   }

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

//   localStorage.setItem('entries', JSON.stringify(entries));
// }


// function updateUserEntryLocal(newUserEntry) {
  
//   user_e = [];
//   const user_eText = localStorage.getItem('user_e');
//   if (user_eText) {
//     user_e = JSON.parse(user_eText);
//   }


//   let found = false;
//   for (const [i, prevEntry] of user_e.entries()) {
//     if (prevEntry.datetime < newUserEntry.datetime) {
//       user_e.splice(i, 0, newUserEntry);
//       found = true;
//       break;
//     }
//   }
//   //console.log(user_e)
//   if (!found) {
//     user_e.push(newUserEntry);
//   }

//   localStorage.setItem('user_e', JSON.stringify(user_e));
// }

// Functionality for peer communication using WebSocket


// function configureWebSocket() {
//   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//     socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//     //socket.send('is this working?');
//     socket.onopen = (event) => {
//       displayMsg('system', '', 'connected');
//     };
//     socket.onclose = (event) => {
//       displayMsg('system', '', 'disconnected');
//     };
//     socket.onmessage = async (event) => {
//       const msg = JSON.parse(await event.data.text());
//       if (msg.type === FormSubmit) {
//         displayMsg('user', msg.from, `burned ${msg.value.calories} calories`);
//       } else if (msg.type === UserLoggedIn) {
//         displayMsg('user', msg.from, `logged on`);
//       }
//     };
// }

// function displayMsg(cls, from, msg) {
//   const chatText = document.querySelector('#user-messages');
//   chatText.innerHTML =
//     `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
//   //console.log(chatText.innerHTML)
// }

// function broadcastEvent(from, type, value) {
//   const event = {
//     from: from,
//     type: type,
//     value: value,
//   };
//   console.log(socket);
//   // socket.onopen = function(e) {
//   //   socket.send(JSON.stringify(event));
//   // }
//   socket.send(JSON.stringify(event));
// }

(async () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      document.querySelector('#playerName').textContent = userName;
      setDisplay('loginControls', 'none');
      setDisplay('playControls', 'block');
    } else {
      setDisplay('loginControls', 'block');
      setDisplay('playControls', 'none');
    }
})();

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}

async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
        localStorage.setItem('userName', userName);
        window.location.href = 'new.html';
      } else {
        const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
      }
    }

    function track() {
       window.location.href = 'new.html';
    }

    function logout() {
        localStorage.removeItem('userName');
        fetch(`/api/auth/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
    }


    async function getUser(username) {
        //let scores = [];
        // See if we have a user with the given email.
        const response = await fetch(`/api/user/${userName}`);
        if (response.status === 200) {
          return response.json();
        }
      
        return null;
      }


      function setDisplay(controlId, display) {
        const playControlEl = document.querySelector(`#${controlId}`);
        if (playControlEl) {
          playControlEl.style.display = display;
        }
      }

// function loginError() {
//     //some sort of alert here
//     console.log("must enter username")
// }

// function passwordError() {
//     console.log("must enter password")
// }



// function login() {
//     const userE1 = document.querySelector('#username');
//     //console.log(userE1);
//     // check this
//     if (!userE1.value) {
//         loginError()
//         return -1
//     }
//     localStorage.setItem("username", userE1.value);
//     //console.log(userE1.value)
//     const passwordE1 = document.querySelector("#password");

//     if (!passwordE1.value) {
//         passwordError()
//         return -1
//     }

//     localStorage.setItem("password", passwordE1.value);
//     console.log(userE1.value)

//     window.location.href = "new.html";
// } 
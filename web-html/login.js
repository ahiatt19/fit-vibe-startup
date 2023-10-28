function loginError() {
    //some sort of alert here
    console.log("must enter username")
}

function passwordError() {
    console.log("must enter password")
}



function login() {
    const userE1 = document.querySelector('#username');
    //console.log(userE1);
    // check this
    if (!userE1.value) {
        loginError()
        return -1
    }
    localStorage.setItem("username", userE1.value);
    //console.log(userE1.value)
    const passwordE1 = document.querySelector("#password");

    if (!passwordE1.value) {
        passwordError()
        return -1
    }

    localStorage.setItem("password", passwordE1.value);
    console.log(userE1.value)

    window.location.href = "new.html";
} 
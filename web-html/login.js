function login() {
    const userE1 = document.querySelector('#username');
    console.log(userE1);
    localStorage.setItem("username", userE1.value);
    console.log(userE1.value)
    const passwordE1 = document.querySelector("#password");
    localStorage.setItem("password", passwordE1.value);

    window.location.href = "new.html";
}
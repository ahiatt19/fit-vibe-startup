//getUsername(); {
    //return localStorage.getItem('username')
//}


function saveForm() {
    const dateE1 = document.querySelector("#datetime");
    localStorage.setItem("datetime", dateE1.value);
    const caloriesE1 = document.querySelector("#cals");
    localStorage.setItem("cals", caloriesE1.value);
    const wrkoutE1 = document.querySelector("#wrkout");
    localStorage.setItem("wrkout", wrkoutE1.value);
    const noteE1 = document.querySelector("note");
    localStorage.setItem("note", noteE1.value)
    window.location.href = "past.html"
}
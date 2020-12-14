const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const idnums = ["1016481","1019786","1018133","1019923","1019005",
"1019146","1016916","1019009","1019726","1019090","1017923",
"1017871","1017683","1021536","1019030","1018465","1018556",
"1017600","1017805","1018582","1020236","1019368","1016256",
"1016256","1019831","1024859","1028063","1017580","1017985",
"1017224","1020277","1024988","1017760","1020552","1017808",
"1018553","1019973","1018530","1019007","1019078","1018982",
"1018017","1027277","1018605","1019184","1019109","1018978",
"1019763","1019106","1019107","1019105","1023334","1020213",
"1021435","1019397"]


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = loginForm.IDNum.value;

    if (idnums.includes(user)) {
        console.log("logged in");
        Redirect(idnums, user);
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function Redirect (idnums, user) {
    var index = idnums.indexOf(user);
    
    window.location = "Bingo-Cards/" + (index + 1) + ".html";
}
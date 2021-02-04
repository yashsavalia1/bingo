const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
//To be replaced with strings of ID Numbers
const idnums = ["1","2","3","4","5","6","7","8","9", "10",
                "11","12","13","14","15","16","17","18","19", "20",
                "21","22","23","24","25","26","27","28","29", "30",
                "31","32","33","34","35","36","37","38","39", "40",
                "41","42","43","44","45","46","47","48","49", "50",
                "51","52","53","54","55","56","57","58","59", "60"]

//Checks whether idnums contains the inputed string
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

//redirects the user to the specified bingo board
function Redirect (idnums, user) {
    var index = idnums.indexOf(user);
    
    window.location = "Bingo-Cards/" + (index + 1) + ".html";
}

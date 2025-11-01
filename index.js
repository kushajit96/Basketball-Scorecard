

let homeScore = 0;
let guestScore = 0;
let displayHome = document.getElementsByClassName("displayhome")[0];
let displayGuest = document.getElementsByClassName("displayguest")[0];

function increamentonehome() {
    homeScore += 1;
    displayHome.innerText = homeScore;
}
function increamentoneguest() {
    guestScore += 1;
    displayGuest.innerText = guestScore;
}
function increamenttwohome() {
    homeScore += 2;
    displayHome.innerText = homeScore;

}
function increamenttwoguest() {
    guestScore += 2;
    displayGuest.innerText = guestScore;

}
function increamentthreehome() {
    homeScore += 3;
    displayHome.innerText = homeScore;

}
function increamentthreeguest() {
    guestScore += 3;
    displayGuest.innerText = guestScore;

}

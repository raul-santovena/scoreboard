homeEl = document.getElementById("home-el")
guestEl = document.getElementById("guest-el")
newGameButton = document.getElementById("new-game")
homeBackEl = document.getElementById("background-home")
guestBackEl = document.getElementById("background-guest")

function highlightLeader() {
    if (homeCounter > guestCounter) {
        homeBackEl.style.borderColor = 'yellow'
        guestBackEl.style.borderColor = 'black'
    } else if (guestCounter > homeCounter) {
        homeBackEl.style.borderColor = 'black'
        guestBackEl.style.borderColor = 'yellow'
    } else {
        homeBackEl.style.borderColor = 'black'
        guestBackEl.style.borderColor = 'black'
    }
}

let homeCounter = 0
let guestCounter = 0

function plusOneHome() {
    homeCounter += 1
    homeEl.textContent = homeCounter
    highlightLeader()
}

function plusTwoHome() {
    homeCounter += 2
    homeEl.textContent = homeCounter
    highlightLeader()
}

function plusThreeHome() {
    homeCounter += 3
    homeEl.textContent = homeCounter
    highlightLeader()
}

function plusOneGuest() {
    guestCounter += 1
    guestEl.textContent = guestCounter
    highlightLeader()
}

function plusTwoGuest() {
    guestCounter += 2
    guestEl.textContent = guestCounter
    highlightLeader()
}

function plusThreeGuest() {
    guestCounter += 3
    guestEl.textContent = guestCounter
    highlightLeader()
}

function newGame() {
    homeCounter = 0
    guestCounter = 0
    homeEl.textContent = homeCounter
    guestEl.textContent = guestCounter
    homeBackEl.style.borderColor = 'black'
    guestBackEl.style.borderColor = 'black'
}
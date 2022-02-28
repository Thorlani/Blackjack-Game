let cardOne = 11
let cardTwo = 7
let cardThree = 13
let cardFour = 10 
let cardFive = 12
let cardSix = 9
let cardSeven = 7
let cardEight = 14
let cardNine = 6 
let cardTen = 8
let cardEleven = 17 
let cardTwelve = 5
let message = ""

let messageEl = document.querySelector("#message-el")
let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")

let sumRose = cardOne + cardTwo
let sumLily = cardThree + cardFour
let sumDaisy = cardSeven + cardEight
let sumOrchid = cardNine + cardTen
let sumIris = cardEleven + cardTwelve
let sumTulip = cardFive + cardSix

function rose() {
    cardEl.textContent = "Cards: " + cardOne + " and " + cardTwo
    sumEl.textContent = "Sum: " + sumRose
    if (sumRose < 21) {
        message = "Do you want to pick a new card?"
        messageEl.textContent = message
    } else if (sumRose === 21) {
        message = "Yippee!! You won the Jackpot."
        messageEl.textContent = message
    } else {
        message = "You lose, try again."
        messageEl.textContent = message
    }
}

function lily() {
    cardEl.textContent = "Cards: " + cardThree + " and " + cardFour
    sumEl.textContent = "Sum: " + sumLily
    if (sumLily < 21) {
        message = "Do you want to pick a new card?"
        messageEl.textContent = message
    } else if (sumLily === 21) {
        message = "Yippee!! You won the Jackpot."
        messageEl.textContent = message
    } else {
        message = "You lose, try again."
        messageEl.textContent = message
    }
}

function orchid() {
    cardEl.textContent = "Cards: " + cardNine + " and " + cardTen
    sumEl.textContent = "Sum: " + sumOrchid
    if (sumOrchid < 21) {
        message = "Do you want to pick a new card?"
        messageEl.textContent = message
    } else if (sumOrchid === 21) {
        message = "Yippee!! You won the Jackpot."
        messageEl.textContent = message
    } else {
        message = "You lose, try again."
        messageEl.textContent = message
    }
}

function daisy() {
    cardEl.textContent = "Cards: " + cardSeven + " and " + cardEight
    sumEl.textContent = "Sum: " + sumDaisy
    if (sumDaisy < 21) {
        message = "Do you want to pick a new card?"
        messageEl.textContent = message
    } else if (sumDaisy === 21) {
        message = "Yippee!! You won the Jackpot."
        messageEl.textContent = message
    } else {
        message = "You lose, try again."
        messageEl.textContent = message
    }
}

function iris() {
    cardEl.textContent = "Cards: " + cardEleven + " and " + cardTwelve
    sumEl.textContent = "Sum: " + sumIris
    if (sumIris < 21) {
        message = "Do you want to pick a new card?"
        messageEl.textContent = message
    } else if (sumIris === 21) {
        message = "Yippee!! You won the Jackpot."
        messageEl.textContent = message
    } else {
        message = "You lose, try again."
        messageEl.textContent = message
    }
}

function tulip() {
    cardEl.textContent = "Cards: " + cardFive + " and " + cardSix
    sumEl.textContent = "Sum: " + sumTulip
    if (sumTulip < 21) {
        message = "Do you want to pick a new card?"
        messageEl.textContent = message
    } else if (sumTulip === 21) {
        message = "Yippee!! You won the Jackpot."
        messageEl.textContent = message
    } else {
        message = "You lose, try again."
        messageEl.textContent = message
    }
}

function restart() {
    // let messageEl = document.querySelector("#message-el")
    // let cardEl = document.querySelector("#card-el")
    // let sumEl = document.querySelector("#sum-el")

    messageEl.textContent = "Pick a card"
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
}
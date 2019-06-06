let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userItem_b = document.getElementById("user-item");
const compItem_b = document.getElementById("comp-item");

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random(choices) * 3)
    return choices[randomNumber]
}

function converToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${converToWord(user)}  beats  ${converToWord(computer)}. YOU WIN!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => { document.getElementById(user).classList.remove('green-glow') }, 1000);
}
function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = converToWord(user) + " loses against " + converToWord(computer) + ". YOU LOSE!";
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => { document.getElementById(user).classList.remove("red-glow") }, 1000)
}

function draw(user) {
    result_p.innerHTML = "It's a draw. try again!"
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(() => { document.getElementById(user).classList.remove("gray-glow") }, 1000)

}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    compItem_b.innerHTML = converToWord(computerChoice)
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice)
            break

    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
        userItem_b.innerHTML = "Rock"
    })
    paper_div.addEventListener('click', function () {
        game('p');
        userItem_b.innerHTML = "Paper"
    })
    scissors_div.addEventListener('click', function () {
        game('s');
        userItem_b.innerHTML = "Scissors"
    })
}


main()

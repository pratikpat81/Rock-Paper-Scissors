let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); //dom variables //span can tell its in span
const computerScore_span = document.getElementById("computer-score"); //dom variables
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getComputerChoice(){
    const choices = ['r','p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getComputerChoice());


function convertToWord(letter){ 
    if(letter === "r") return "ROCK"; 
    if(letter === "p") return "PAPER"; 
    return "SCISSORS";
}

function win(userChoice,computerChoice) { 
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You WIN!"`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 400);
}



function lose(userChoice,computerChoice) { 
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You LOSE!"`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 400);
}


function draw(userChoice,computerChoice) { 
    // userScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}(user) draws ${convertToWord(computerChoice)}(comp). IT IS A DRAW"`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 400);
}

function game(userChoice) { 
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) { 
        case "rs": 
        case "pr": 
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss": 
            draw(userChoice, computerChoice);
            break;
    }
}




function main() { 
rock_div.addEventListener('click', function(){
    game("r");
}) 

paper_div.addEventListener('click', function(){
    game("p");
}) 

scissors_div.addEventListener('click', function(){
    game("s");
}) 

} 
main();


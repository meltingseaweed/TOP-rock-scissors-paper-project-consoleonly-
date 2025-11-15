const body = document.querySelector("body");

let compAction = "";
let humanAction = "";
let humanScore = 0;
let compScore = 0;

//Step1: Create function to generate a random input for the computer. 
function computerInputGen() { 
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    if (randomNum < 33) {
        return compAction = "rock";
    }   else if (randomNum > 67) {
        return compAction = "scissors";
    }   else {
        return compAction = "paper";
    }
}
//Step 2: Get humanAction
// Create a function to have a click event on the button and return 
// a humanAction.

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    // for each one we add a "click" listener
    button.addEventListener("click", () => {
        if ((humanScore < 5) && (compScore < 5)) {
        console.log(`humanAction is ${button.id}`);
        humanAction = button.id;
        console.log(`The type of humanAction is ${typeof humanAction}`);
        computerInputGen();
        console.log(`The computer's Action is ${compAction}`);
        findWinner(humanAction, compAction);
        div.textContent = `Player: ${humanAction}. Computer: ${compAction}.
        Current Score:\nPlayer = ${humanScore}\nComputer = ${compScore}`; 
        body.appendChild(div);
        announceWinner(humanScore, compScore);
    }   else {
        announceWinner(humanScore, compScore);
    }
    });
});

//Step 3: Calculate winner
function findWinner (humanAction, compAction) {
    if (((humanAction === "rock") && (compAction === "scissors")) ||
        ((humanAction === "scissors") && (compAction === "paper")) ||
        ((humanAction === "paper") && (compAction === "rock"))) {
            humanScore += 1;
            console.log("You win this round!");
        }   else if  (((humanAction === "paper") && (compAction === "scissors")) ||
        ((humanAction === "rock") && (compAction === "paper")) ||
        ((humanAction === "scissors") && (compAction === "rock"))) {
            compScore += 1;
            console.log("Nice try!");
        }   else {
            console.log("It's a tie");
        }

    }

    function announceWinner (humanScore, compScore) {
        if (humanScore === 5) {
            div.textContent = "You are the winner!";
        } else if (compScore === 5) {
            div.textContent = "The computer is the winner!";
        }
    }
// Step 4: Show scoreboard
    const div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.color = "white";
    div.style.padding = "20px";
    div.style.fontSize = "24px";
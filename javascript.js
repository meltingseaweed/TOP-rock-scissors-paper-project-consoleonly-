//First attempt at script. Create variables to be used. 
let compAction = "";
let humanAction = "";
let humanScore = 0;
let compScore = 0;

//Step1: Create function to generate a random input for the computer. 
function computerInputGen() {
//Generate a random number between 0 and 1
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
//If statement to generate the output of the function
//Divide the potential output into 3 equal possibilities
//Labeling one as "rock", one as "scissors", and one as "paper"
if (randomNum < 33) {
    return compAction = "rock";
}   else if (randomNum > 67) {
    return compAction = "scissors";
}   else {
    return compAction = "paper";
}
}
//Step 2: Function to get human input using a prompt
// For this project assume the input is proper.
function humanInputGen () {
    humanAction = prompt("rock, scissors, or paper?");
    console.log(humanAction);
    return humanAction;
}
// Note, could a while loop be used to check that the input is correct?
// e.g. while input =! rock/scissors/paper, humanAction = prompt("rock, scissors, or paper?")


//Step 3: Outputs of Step 1 and 2 should be the inputs for Step 3. 
// Compare the strings to determine the winner.
//Use IF statements, else if, and an else statement to declare a tie
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
        console.log(`human's score is: ${humanScore}`);
        console.log(`computer's score is: ${compScore}`);
    }
        
//Give a point to the winner score. 1 point for the human or computer
//Store this value into a variable which can be added to later
//from multiple rounds or games

//Step 4: One game contains 5 rounds of rock scissors paper. 
//Write a function that when called will start the game.
//After each round, the score needs to be recorded, and also
//new inputs need to be prompted from the human and randomly
//generated from the machine.
function playRound () {
    let count = 0;
    while (count < 5) {
        humanInputGen();
        computerInputGen();
        findWinner(humanAction, compAction);
        count++;
    }
    //Declare the overall winner at the end of the 5 rounds. 
    if (humanScore > compScore) {
        console.log("You win!!");
    }   else if (compScore > humanScore) {
        console.log("Nice try, would you like to play again?");
    }   else {
        console.log("It's a tie!");
    }
}
//Call the function playRound() to start the game!
playRound();

//}

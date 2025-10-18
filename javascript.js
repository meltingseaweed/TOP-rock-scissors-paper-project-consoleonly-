//Overall Function to start everything

let compAction = "";
//Step1: Function to generate a random input for the computer. 
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
// Try to store a variable input from the previous function:


//Step 2: Function to get human input using a prompt

//Prompt the user for a string input

//Return this value as the output of the function


//Step 3: Ensure the outputs of the previous functions are the inputs
// for the game.

//Compare the strings to determine the winner.
//Use IF statements, else if, and an else statement to declare a tie

//Give a point to the winner score. 1 point for the human or computer
//Store this value into a variable which can be added to later
//from multiple rounds or games

//Step 4: One game contains 5 rounds of rock scissors paper. 
//Write a function that when called will start the game.
//After each round, the score needs to be recorded, and also
//new inputs need to be prompted from the human and randomly
//generated from the machine.


//Declare the overall winner at the end of the 5 rounds. 




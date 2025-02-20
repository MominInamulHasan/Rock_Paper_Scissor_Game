let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game was draw !Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    } else{
        compScore++;
        CompScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
     
}

const playGame = (userChoice) =>{
    
    //Generate Computer choice
    const compChoice = genCompChoice();
   

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else{
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});
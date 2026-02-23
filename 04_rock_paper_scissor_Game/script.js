let userScore=0;
let compScore=0;


// now acces choices 

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

// for update score acces score 
 const userScorePara=document.querySelector("#user-score");
 const compScorePara=document.querySelector("#comp-score");


// gen comp choice 
const genCompchoice=()=>{
    let option =[ "rock" , "paper" ,"scissor"];
    let randomIdx=Math.floor((Math.random())*3);

    return  option[randomIdx];
};

const drawGame=(userChoice)=>{
    // console.log("Draw the Game");

    
          msg.innerText=`Game Was Draw ! both Choice ${userChoice}`;
          msg.style.backgroundColor="#081b31";
};

// show winner 
const showWinner =(userWin ,userChoice,compChoice)=>{
    if (userWin) {
      //  console.log(`You Win! your ${userChoice} Beats ${compChoice}`);
        
        // update Score 
userScore++;
userScorePara.innerText=userScore;



// msg diplay for winner 
msg.innerText=`You Win! your ${userChoice} Beats ${compChoice}`;
msg.style.backgroundColor="Green";


    }
     else  {
        //  console.log(` Opps !You lose. ${compChoice} Beats your  ${userChoice}`);

          // update Computer score 
          compScore++;
compScorePara.innerText=compScore;
          msg.innerText=` Opps !You lose. ${compChoice} Beats your  ${userChoice}`;
          msg.style.backgroundColor="red";
     }
};

const playGame=(userChoice)=>{
   //  console.log(`User choice is= ${userChoice}`);

     // generate comp choice 
    const compChoice= genCompchoice();
// console.log(`Computer choice is=${compChoice}`);
// now logic the Game 
if (userChoice=== compChoice){
    // Draw the Game 
    drawGame(userChoice);
}

else {

 let  userWin=true;
    if(userChoice==="rock"){
// computer choice = paper , scissor
 userWin=compChoice==="paper"?false:true;



    }
    else if (userChoice==="paper"){
        userWin=compChoice==="rock"?true:false;
    }

    else if (userChoice==="scissor") {
        userWin=compChoice==="rock"? false:true;
    }
      showWinner(userWin ,userChoice,compChoice);
}

};


choices.forEach((choice)=>{
// console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   
    playGame(userChoice);
});

});



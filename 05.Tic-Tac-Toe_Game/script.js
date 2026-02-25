let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");

let turnO=true; // playerO , PlayerX

const winningPattern=[ 
    [0,1,2] ,[0 , 3,6] ,[0,4,8] ,
    [1,4,7],[2,5,8] ,[2,4,6] ,
    [3,4,5] ,[6,7,8]
]

 
// To track draw  
let count=0;
boxes.forEach ((box) => {

    box.addEventListener("click",()=>{
        console.log("mouse was click!");

        if(turnO) {
            //playerO
            box.innerText="O";
            turnO=false;
        }
         else {
            // PlayerX
            box.innerText="X";
            box.style.color="orange";
            turnO=true;
         }

         box.disabled=true;

         // call checkWinner
         let isWinner=checkWinner();
// for check draw condition 
count++;
if (count===9 && !isWinner){
    gameDraw();
}
         
    });
});

// call Game draw 
let gameDraw=()=>{
    msg.innerText="Game Was Draw ! Play Again!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner=()=>{
for( let pattern of winningPattern){

    // console.log(pattern);

    // console.log(boxes[pattern[0]] ,boxes[pattern[1]] ,boxes[pattern[2]] );

    let firstPos =boxes[pattern[0]].innerText ;
    let secPos = boxes[pattern[1]].innerText;
    let thirdPos=boxes[pattern[2]].innerText;

    // for winner check winningPattern not emty 
    if (firstPos!="" && secPos!="" && thirdPos!=""){

        // check all value or postion same or not for winner
        if(firstPos===secPos && secPos=== thirdPos){

// console.log("winner! Player:" ,firstPos);

// Call winner & msg container hide Remove 
showWinner(firstPos);

        }
    }

}
}

showWinner= (winner) =>{
msg.innerText=`Congratulation ! Winner is player:${winner} `;

// Remove hide from msg-container 
msgContainer.classList.remove("hide");
  

// first winner then disbled all boxes 
disabledBoxes();
}


disabledBoxes = ()=>{
    for(let box of boxes ){
        box.disabled=true;
    }
}

 


// reset btn 

 const resetGame=()=>{
    turn0=true;
    
    enableBtn();
msgContainer.classList.add("hide");
};

    

// enable function 
 let enableBtn=()=> {

     for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
    }
};


// When call you reset & new Game btn 
newBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" ,resetGame);
 

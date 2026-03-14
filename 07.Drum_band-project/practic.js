// // Power switch setup (add this once at the top)
// let power = false;  // Start as OFF (change to true if you want it ON by default)

// document.getElementById("powerBtn").addEventListener("click", function() {
//     power = !power;  // Toggle: true → false, false → true
    
//     // Update button text
//     this.textContent = power ? "Power ON" : "Power OFF";
    
//     // Toggle a CSS class for styling
//     this.classList.toggle("power-off");
    
//     // Dim the whole page when OFF
//     document.body.style.opacity = power ? "1" : "0.5";
// });

let numberOfDrumButtons=document.querySelectorAll(".drum");
// console.log(numberOfDrumButtons); give all nodes of drum

// for click 
for(let i=0; i<numberOfDrumButtons.length; i++){
 numberOfDrumButtons[i].addEventListener("click",function(){
    //  console.log(this.innerHTML);
let innerHTML=this.innerHTML;

makeSound(innerHTML);
   

// for Animation  
btnShadow(innerHTML);

     });

}

// for keyboard pressed 
document.addEventListener("keypress", function (event){
    // console.log(event.key);

    makeSound(event.key);
    btnShadow(event.key);
})



function makeSound(key){  
    switch(key){

    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break; 
  
     case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break; 
  
        
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break; 
  case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break; 
  case "j":
        var crash =new Audio("sounds/crash.mp3");
        crash .play();
        break; 
  case "k":
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break; 
  case "l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break; 
default : console.log(key);
}
}

function btnShadow(currentKey){

     let activebtn=document.querySelector("."+ currentKey);

     // if no mathcing btn then return nothin ..for handle null classList error

     if(!activebtn) return ;
     
activebtn.classList.add("pressed")

//  console.log(activebtn)

// give setTimeout 

setTimeout(()=>{ 
    activebtn.classList.remove("pressed")
},200)

}


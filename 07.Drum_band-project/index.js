
let numberOfDrumButtons=document.querySelectorAll(".drum");

// console.log(numberOfDrumButtons);--> give all nodes of drum

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

     // if no mathcing btn then return nothing ..for handle null classList error

     if(!activebtn) return ;
     
activebtn.classList.add("pressed")


// give setTimeout 

setTimeout(()=>{ 
    activebtn.classList.remove("pressed")
},200)

}


// ===================== DARK MODE TOGGLE =====================
const darkToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Remember user's choice
if (localStorage.getItem('theme') === 'dark') {
  darkToggle.checked = true;
  body.classList.add('dark-mode');
}

// Toggle on click
darkToggle.addEventListener('change', () => {
  if (darkToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});


// ===================== POWER BUTTON LOGIC =====================
const powerBtn = document.querySelector('.powerBtn');
let isPowerOn = true;   // starts ON

function togglePower() {
  isPowerOn = !isPowerOn;

  if (isPowerOn) {
    document.body.classList.remove('power-off');
    powerBtn.textContent = 'POWER OFF';
  } else {
    document.body.classList.add('power-off');
    powerBtn.textContent = 'POWER ON';
  }
}

// Click on button
powerBtn.addEventListener('click', togglePower);

// BLOCK KEYBOARD when power is OFF (works with your existing key logic)
document.addEventListener('keydown', function(e) {
  if (!isPowerOn) {
    const drumKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
    if (drumKeys.includes(e.key.toLowerCase())) {
      e.stopImmediatePropagation();   // stops your existing key handler
      return false;
    }
  }
}, true); // capture phase = runs first

// Initial state (button already says "POWER OFF" in HTML)
document.body.classList.remove('power-off');
powerBtn.textContent = 'POWER OFF';
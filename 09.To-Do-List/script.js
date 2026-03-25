// alert("Working....");
 document.addEventListener("DOMContentLoaded" , ()=>{

  const todoInput= document.getElementById("todo-input");
 const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks =  JSON.parse(localStorage.getItem('tasks')) || [];
 
  tasks.forEach((task) => renderTask(task));


  // for keypress 
  todoInput.addEventListener("keypress" , (event)=>{
   if(event.key === 'Enter'){
   // console.log("right key was click");
    addTaskButton.click();

   }  else return ;
 });

  addTaskButton.addEventListener("click" , ()=>{
let taskText = todoInput.value.trim();

// check input value is empty 
if(taskText==="") return;  


let newTask = {
    id: Date.now(),
    text: taskText,
    completed: false 
}

tasks.push(newTask);
renderTask(newTask);
saveTask();
//  clear input 
todoInput.value ="";
// console.log(tasks);

  });
 
// read and pickup & display the DOM the task 

function renderTask(task){

// console.log(task.text);
// console.log("render task working ");

// create
const li=document.createElement("li");
li.setAttribute("data-id" , task.id);

// completed add class
if(task.completed)  li.classList.add("completed");

li.innerHTML=`
<span>${task.text}</span>
<button>Delete</button>
`
// completed the task 
li.addEventListener("click" ,(e)=>{

  if(e.target.tagName==='BUTTON')  return;

task.completed = !task.completed;
li.classList.toggle("completed");
saveTask();
});


// for button delete 
li.querySelector('button').addEventListener("click" , (e)=>{

  e.stopPropagation(); // prevent toggle from firing --> bubbling up
  tasks = tasks.filter((t) => t.id!== task.id);
  li.remove();
 
  saveTask();
 
});

 todoList.appendChild(li);

}


  function saveTask(){

    // store the data 
localStorage.setItem("tasks" , JSON.stringify(tasks));

  }

 });
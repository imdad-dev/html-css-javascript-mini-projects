// alert("Working...");

document.addEventListener("DOMContentLoaded" , ()=>{

const expenseForm =  document.getElementById("expense-form");
const expenseNameInput=  document.getElementById("expense-name");
const expenseAmountInput=  document.getElementById("expense-amount");
const expenseList=  document.getElementById("expense-list");
const expenseTotal =  document.getElementById("total");
const totalAmountDisplay =  document.getElementById("total-amount");

let expenses =JSON.parse(localStorage.getItem("expense")) ||   [];
let totalAmount = calculateTotal(); 

expenseForm.addEventListener("submit" , (e)=>{

    e.preventDefault();
    let  name = expenseNameInput.value.trim();
 const amount =  parseFloat(expenseAmountInput.value.trim());

  if(name !=="" && !isNaN(amount) && amount>0){
    let newExpense = {
id: Date.now(),
name: name,
amount: amount 
}
// push in expense array 
expenses.push(newExpense);
saveExpenseToLocal();
renderExpenses();
updateTotal (); 
 
expenseAmountInput.value ="";
expenseNameInput.value ="";
}

});

 function renderExpenses(){
expenseList.innerHTML="";
expenses.forEach(expense => {
    const li = document.createElement("li");
    li.innerHTML =` 
    <li> ${expense.name} - $${expense.amount}</li>
    <button data-id =${expense.id} >Delete </button>
    `
    expenseList.appendChild(li);
});

}

// calculate Total Amount 
function calculateTotal(){
    console.log(typeof expenses);
    return expenses.reduce((sum , expense) => sum+expense.amount ,0) // expense use as a temporarly variable--> can expenseData , calc, 
}


function updateTotal(){

    totalAmount = calculateTotal();
  totalAmountDisplay.innerHTML =`${totalAmount}`;
  saveExpenseToLocal();

}

// save local stroage 
function saveExpenseToLocal(){
localStorage.setItem("expense" ,JSON.stringify(expenses));
}

// delete Button 
expenseList.addEventListener("click" ,(e)=>{

    if(e.target.tagName === 'BUTTON'){

        const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses  =  expenses.filter(p => p.id 
            !== expenseId)

            saveExpenseToLocal();
            renderExpenses();
            updateTotal();
    }
                             

});

});

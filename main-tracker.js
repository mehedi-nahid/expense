 var state = {
 				balance : 0,
 				income : 0,
 				expense : 0,
 				tran: []
 }
 
 var nothing = []
 
 const balanceEl = document.querySelector(".bal-amount")
 
 const incomeEl = document.querySelector(".in-amount")
 
 const expenseEl = document.querySelector(".ex-amount")
 
 var historyEl = document.querySelector(".list-items")
 
 const inBtnEl = document.querySelector("#inBtn")
 
 const exBtnEl = document.querySelector("#exBtn")
 
 const nameEl = document.getElementById("name")
 
 const amountEl = document.getElementById("amount")
 
 var capital = state.tran
 
 function first(){
 
 				balanceEl.innerHTML = `$${state.balance}`     
 		 incomeEl.innerHTML= `$${state.income}`
 		 expenseEl.innerHTML = `$${state.expense}`
 		 var item;
 		 for(var i=0;i<state.tran.length;i++){
 		 				item = state.tran[i];
 		      historyEl.innerHTML  += `<li>${item.name}</li><div><span id="ok">$${item.amount}</span><button onclick = "xfunction()">x</button></div>`
 		      var fal = document.getElementById("ok")
if (state.tran[i].type === "income") {
				fal.classList.add("income-class")
				fal.classList.remove("expense-class")
}else if(state.tran[i].type === "expense"){
				fal.classList.add("expense-class")
				fal.classList.remove("income-class")
}	 
 		 } 
 }
 

 inBtnEl.addEventListener("click",function(){
 				var namClicked= nameEl.value
 				var 	amClicked = parseInt(amountEl.value)
 								var kom =JSON.parse(`{ "name" : "${namClicked}", "amount" : ${amClicked}, "type" : "income"}`)
 				capital.push(kom)
 				historyEl.innerHTML = ""
 				first()
 				hishab()
 				nameEl.value=""
 				amountEl.value = ""
 				
 })

function hishab(){
      var balance = 0;
      var income = 0;
      var expense = 0;
      var item;
    
     for(var r=0;r<state.tran.length;r++){
      	 item = state.tran[r]
      		if (item.type === "income") {
      						income += item.amount
      		}else if (item.type === "expense") {
      						expense += item.amount
      		}}balance = income - expense;
      		balanceEl.innerHTML = `$${balance}`
      		incomeEl.innerHTML = `$${income}`
      		expenseEl.innerHTML = `$${expense}`
}
exBtnEl.addEventListener("click",function(){
				var namClicked= nameEl.value
 				var 	amClicked = parseInt(amountEl.value)
 								var kom =JSON.parse(`{ "name" : "${namClicked}", "amount" : ${amClicked}, "type" : "expense"}`)
 				capital.push(kom)
 				historyEl.innerHTML = ""
 				first()
 				hishab()
 				nameEl.value=""
 				amountEl.value=""
 				
})
 
 
function xfunction(){
				
				Swal.fire({
				  icon: 'error',
				  title: 'Oops...',
				  text: 'Something went wrong!',
				  footer: '<a href="#">Why do I have this issue?</a>'
				})
}

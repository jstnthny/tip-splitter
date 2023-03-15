let bill = document.querySelector("#bill").textContent;
let tipAmount = document.querySelector(".tipAmount");
let tipButtons = document.querySelectorAll("#tip");
let form = document.querySelector("form");
// console.log(form.bill.textContent);

tipButtons.forEach((tipButton) => {
    tipButton.addEventListener("click", (e) => setBill(e.target.textContent))
})





// Function set initial Bill

function setBill(tip,e){
    console.log(e); 
    
}

function formHandler(e){
    console.log("test")
}

// JS Logic

// 1.) Enter Bill amount (Ex: $50)
// - Store amount into a variable let bill = 50 

// 2.) Select 10 Percentage (Event Listener to listen for click on input use value of input to
// divide bill based on tip amount )

// Ex: 50 / 0.10: bill = 50 / 0.10
// let tipAmount = bill / 0.10 = 5

// 3.) User inputs number of people who will be sharing bill
// We set that number into a variable let numOfPeople = 2

// 4.) tipAmount = tipAmount / numOfPeople

// 5.) Values for the output on the right side
// Tip Amount = tipAmount 
// Total = tipAmount * numOfPeople

 /*
Daniel Koval
WPF section 01
11/6/14
Functions Personal
 */

//To determine if the user is happy with the waiter/waitress and how much to tip based on bill

 //Ask for how much the overall bill was after the users meal

 var bill = prompt("Please enter in the total amount of your bill.");

 //Validate prompt to ensure that it is a number and is not empty

 while(isNaN(bill) || bill===""){

  bill = prompt("Please enter in the total amount of your bill.")
 }

 //Console.log the results
 console.log(bill);

 //Ask if they enjoyed their service

 var service = prompt("Were you happy with the service you received?");

 while(service === ""){

  service = prompt("Were you happy with the service you received?")
 }

 //Console.log the results
 console.log(service);

 //Determine the answer and how much to tip
 if (service === "yes"){

   var tipPercentage = .25
 }else if (service === "no"){

   var tipPercentage = .15
 }else{

  service = prompt("Were you happy with the service you received? (Enter 'yes' or 'no'")
 }

 if (service === "yes"){

  var tipPercentage = .25
 }else if (service === "no"){

  var tipPercentage = .15
 }

 //Ternary
 (service === "yes") ? console.log("You should tip 25%") : console.log("You should tip 15%");

 //Call the function
 var result = calculateTip(bill,tipPercentage);

 //Console.log result
 console.log(result);

 //Alert the amount to tip
 alert("You should tip somewhere around $" + result + " to your waiter/waitress.");

//Function to calculate tip
 function calculateTip(totalBill,totalPercentage){

  var amountTip = (totalBill * totalPercentage);

  return amountTip;
 }


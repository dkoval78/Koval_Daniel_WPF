
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

 if (service === "yes" || "y"){


 }else if (service === "no" || "n"){


 }else{

  service = prompt("Were you happy with the service you recieved?")
 }
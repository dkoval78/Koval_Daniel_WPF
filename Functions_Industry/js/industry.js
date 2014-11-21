
 /*
Daniel Koval
WPF section 01
11/6/14
Functions Industry
 */

//To determine how much of a tuition credit a student would get based on the week they drop.

 //Ask for variable tuition to see how much tuition the student was charged
 var tuition = prompt("Please enter the total amount of tuition you were charged.");

 //Validate prompt to make sure field is not empty and is actually a number

 while(isNaN(tuition) || tuition===""){

  tuition = prompt("Please enter the total amount of tuition you were charged.");
 }
//console.log results
 console.log(tuition);

 //Ask for variable week to see how long student attended for
 var week = prompt("Please enter the week you dropped (week 1-10)");

 //Validate prompt to make sure field is not empty and is actually a valid number
 while(isNaN(week) || week==="" || week === "0" || week > 10){

  week = prompt("Please enter the week you dropped (week 1-10)");
 }
//console.log results
 console.log(week);

 //Determining what percentage to credit back based on the week the student dropped
 if (week === "1"){

    var percentOne = 1.00
 }else if (week === "2"){

    var percentOne = .80
 }else if (week === "3"){

    var percentOne = .60
 }else if (week === "4"){

    var percentOne = .55
 }else if (week === "5"){

    var percentOne = .50
 }else if (week === "6"){

    var percentOne = .30
 }else{
  var percentOne = 0
 }
 //Call the function
 var result = amountBack(tuition,percentOne);

 console.log("The amount of tuition you'll be credited is " + result);

 alert("You can expect back $" + result + " in tuition credit.");

 //Function to generate total tuition credited back to student ledger minus withdraw fee
 function amountBack(tuitionBack,percentageFromWeek){

     var totalBack = ((tuitionBack * percentageFromWeek) - 75);

     return totalBack;
 }
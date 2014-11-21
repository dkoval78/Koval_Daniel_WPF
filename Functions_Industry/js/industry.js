
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

 //Ask for variable weekDropped to see how long student attended for
 var weekDropped = prompt("Please enter the week you dropped (week 1-10)");

 //Validate prompt to make sure field is not empty and is actually a valid number
 while(isNaN(weekDropped) || weekDropped==="" || weekDropped === "0" || weekDropped > 10){

  weekDropped = prompt("Please enter the week you dropped (week 1-10)");
 }
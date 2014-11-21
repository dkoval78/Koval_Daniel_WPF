
 /*
Daniel Koval
WPF section 01
11/6/14
Functions Industry
 */

//To determine how much of a tuition credit a student would get based on the week they drop.

 var tuition = prompt("Please enter the total amount of tuition you were charged.");

 //Validate prompt to make sure field is not empty and is actually a number

 while(isNaN(tuition) || tuition===""){

  tuition = prompt("Please enter the total amount of tuition you were charged.");
 }

 var weekDropped = prompt("Please enter the week you dropped (week 1-10)");
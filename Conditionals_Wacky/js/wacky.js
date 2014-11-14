
 /*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

 //To determine if a person is old enough and interested in receiving information about MediCare.

 var age = 65;

 var interest = "yes";

 //Determine how old the user is

 var age = prompt("Please enter your current age.");

 console.log(age);

 //Validate the prompt to make sure it is not empty.

 if (name === ""){

    name = prompt("Please enter a valid age.");
 }

 console.log(age);
 
 if (age >= 65){

    console.log("You may qualify for MediCare!");

 }else{

    console.log("You are not eligible for Medicare yet.");
 }
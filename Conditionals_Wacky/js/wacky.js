
 /*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

 //To determine if a person is old enough and interested in receiving information about Medicare.

 var age = 65;

 var interest = "yes";

 //Determine how old the user is

 var age = prompt("Please enter your current age.");

 console.log(age);

 //Validate the prompt to make sure it is not empty.

 if (age === ""){

    age = prompt("Please enter a valid age.");
 }

 console.log(age);

 //Check to see if the user may qualify for Medicare.

 if (age >= 65){

  alert("You may qualify for Medicare!");

  console.log("You may qualify for Medicare!");

 }else{

  alert("You are not eligible for Medicare yet.");

  console.log("You are not eligible for Medicare yet.");
 }

 //Ask to see if the user is interested in receiving information about MediCare.

 var interest = prompt("Are you interested in receiving information regarding Medicare?");

 //Validate the prompt to make sure it is not empty.

 if (interest === ""){

     interest = prompt("Please indicate 'yes' or 'no'");
 }

 if (interest === "yes"){

    alert("Please visit www.medicare.gov.");

    console.log("Please visit www.medicare.gov");

 }else{

    alert("Thank you for your interest!");

    console.log("Thank you for your interest!");
 }


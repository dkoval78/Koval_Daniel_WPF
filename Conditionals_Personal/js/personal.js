
 /*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

//To see if the user is old enough and wants to enjoy happy hour with friends or family.

 var age = 21;

 var interest = "yes";

 //Determine if the user is old enough to drink.

 var age = prompt("Please tell us your age.");

 console.log(age);

 //Validate prompt to ensure it is not empty.

 if (age === "") {

     age = prompt("Please enter a valid age.");
 }

 console.log(age);

 if (age >= 21){

  alert("You're old enough to join us for Happy Hour!");

  console.log("You're old enough to join us for Happy Hour!");

 }else{

  alert("Even though you're not old enough for Happy Hour, you can join us for non-alcoholic drinks!");
 }

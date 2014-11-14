
 /*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

//To see if the user is old enough and wants to enjoy happy hour with friends or family.

 var age = 21;

 var userDrinks = "yes" || "no";

 //Determine if the user is old enough to drink.

 var age = prompt("Please tell us your age.");

 console.log(age);

 //Validate prompt to ensure it is not empty.

 if (age === ""){

     age = prompt("Please enter a valid age.");
 }

 console.log(age);

 //See if the user is old enough to drink.

 if (age >= 21){

  alert("You're old enough to join us for Happy Hour!");

  console.log("You're old enough to join us for Happy Hour!");

 }else{

  alert("Even though you're not old enough for Happy Hour, you can still join us for non-alcoholic drinks!");

  console.log("Even though you're not old enough for Happy Hour, you can still join us for non-alcoholic drinks!");

 }

//Ask to see if the user drinks alcohol.

 var userDrinks = prompt("Do you drink alcohol?");

 if (userDrinks === "") {

  userDrinks = prompt("Please tell us if you enjoy adult beverages.");

 }

  if (age >= 21 && userDrinks === "yes"){

   alert("We will have a great variety of drinks for you to try!");

   console.log("We will have a great variety of drinks for you to try!");

  }

 if (age >= 21 && userDrinks === "no"){

   alert("We will have a great variety of non-alcoholic drinks for you to enjoy!");

   console.log("we will have a great variety of non-alcoholic drinks for you to enjoy!");

  }else{

  alert("Even though you're not old enough for adult beverages, we will have several non-alcoholic drinks for you to enjoy!");

  console.log("Even though you're not old enough for adult beverages, we will have several non-alcoholic drinks for you to enjoy!");

 }

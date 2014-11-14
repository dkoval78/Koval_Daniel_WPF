
 /*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

//To determine if a user is a student and if they are eligible for student loans.

 var student = "yes" || "no";

 var studentStatus = "full time" || "half time";

 //Determine if the user is a student

 var student = prompt("Are you currently a student?");

 console.log(student);

 //Validate prompt to ensure it is not blank.

 if(student === ""){

    student = prompt("Please let us know if you a student, 'yes' or 'no'.");
 }

 console.log(student);

 //See if the student is eligible for loans.

 if(student === "yes"){

  alert("You may be eligible for student loans!");

  console.log(student);
 }
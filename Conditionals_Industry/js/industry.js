
 /*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

//To determine if a user is a student and if they are eligible for student loans.

 var student = "yes" || "no";

 var studentStatus = "yes" || "no";

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

  console.log("You may be eligible for student loans!");

 }else{

  alert("Sorry, you cannot receive student loans unless you are a student!");

  console.log("Sorry, you cannot receive student loans unless you are a student!");
 }

 //Ask to see if the user is at least a half-time student.

 var studentStatus = prompt("Are you attending at least half time?");

 console.log(studentStatus);

 //Validate prompt to ensure it is not blank.

 if(studentStatus === ""){

    studentStatus = prompt("Please tell us if you are attending at least half time.");
 }

 console.log(studentStatus);

 

 /*
Daniel Koval
WPF section 01
11/6/14
Functions Wacky
 */

//To determine if a golfer can expect to improve his/her game through lessons and club fitting

 //Ask what the users golf score is
 var golfScore = prompt("What is your golf score after 18 holes?");

 //Validate prompt to ensure it is a number and is not blank
 while(isNaN(golfScore) || golfScore===""){

  golfScore = prompt("What is your golf score after 18 holes?");
 }

 //Console.log the results
 console.log(golfScore);

 //Ask to see if the user is willing to take golf lessons

 golfLessons = prompt("Are you willing to take golf lessons?");

 //Validate prompt to ensure that it is not blank
 while(golfLessons === ""){

   golfLessons = prompt("Are you willing to take golf lessons? ('yes' no 'no')");

 }

 //Determine answer to see if golf score can improve
 if (golfLessons === "yes"){

    shotsLessons = 8
 }else if (golfLessons === "no"){

    shotLessons = 0
 }
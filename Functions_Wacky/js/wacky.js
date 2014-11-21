
 /*
Daniel Koval
WPF section 01
11/6/14
Functions Wacky
 */

//To determine if a golfer can expect to improve his/her game through lessons and club fitting

 //Ask what the users golf score is
 var golfScore = prompt("What is your golf score after 18 holes?");

 while(isNaN(golfScore) || golfScore===""){

  golfScore = prompt("What is your golf score after 18 holes?");
 }

 
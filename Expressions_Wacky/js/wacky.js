/*
Daniel Koval
WPF section 01
11/6/14
expressions wacky
 */

//To determine how many hours on average the user plays video games per day, and how many hours they play per year if they gave up one hour per day

//Ask user how many hours they play per day
var hoursDay = prompt("How many hours do you play video games per day?");

//Console.log out the response
console.log(hoursDay);

//Ask user how many days they play per week
var daysWeek = prompt("How many days do you play per week?");

//Console.log out the response
console.log(daysWeek);

//Ask user how many days are in a year
var weeksYear = prompt("How many weeks are in a year?");

//Console.log out the response
console.log(weeksYear);

//Calculate the total number of hours spent playing video games per year

var hoursYear = hoursDay * daysWeek * weeksYear;

//Calculate the average number of hours per day spent playing video games
var avgDay = hoursYear / 365;

//Console.log out the results
console.log("Based on your answers, you spend an average of " + avgDay + " per day playing video games.");

//Let the user know how many hours they play on average per day
alert("Based on your answers, you spend an average of " + avgDay + " per day playing video games.");

//Subtract out one day per week
var newTotal = daysWeek - 1;

//Calculate new totals for the year
var newCalc = hoursDay * newTotal * weeksYear;

//Calculate new average per year
var newAvg = newCalc / 365;

//Console.log out the results
console.log("If you played one less day per week, your new total would be " + newAvg);

//Let user know what the total would be if they played one less day per week
alert("If you played one less day per week, your new total would be " + newAvg + " per day.");

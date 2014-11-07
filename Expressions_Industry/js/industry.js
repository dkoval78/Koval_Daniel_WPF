/*
Daniel Koval
WPF section 01
11/6/14
expressions industry
 */

//To determine how much the user can expect to pay in student loans

//Array of loan terms in years
var loanTerms = ["120", "180", "300"];

//Console.log out the response
console.log(loanTerms);

//Find out how many loans the user has
var totalLoans = prompt("How many student loans do you have?");

//Console.log out the response
console.log(totalLoans);

//Find out how much the user owes on average
var avgOwed = prompt("How much do you owe on average per loan?");

//Console.log out the results
console.log(avgOwed);

//Find out what the average interest rate is
var avgInterest = prompt("What is your average interest rate? (i.e. 2.5% = .025)");

//Console.log out the results
console.log(avgInterest);

//Calculate the totals
var totalOwed = totalLoans * avgOwed;

var finalInterest = totalOwed * avgInterest;

var finalAmount = totalOwed + finalInterest;

//Console.log out the results
console.log("Based on this information, the total amount owed will be $" + finalAmount);

//Alert the user of the total amount owed
alert("Based on this information, the total amount owed will be $" + finalAmount);

//Calculate the monthly payment based on a 10 year repayment plan
var tenYear = finalAmount / loanTerms [0];

//Console.log out the results for 10 years
console.log("Over the 10 year repayment plan, your estimated monthly payment would be $" + tenYear + ".");

//Alert the user how much the amount would be for a 10 year repayment plan
alert("Over the 10 year repayment plan, your estimated monthly payment would be $" + tenYear + ".");

//Calculate the monthly payment based on a 15 year repayment plan
var fifteenYear = finalAmount / loanTerms [1];

//Console.log out the results for 15 years
console.log("Over the 15 year repayment plan, your estimated monthly payment would be $" + fifteenYear + ".");

//Alert the user how much the amount would be for a 15 year repayment plan
alert("Over the 15 year repayment plan, your estimated monthly payment would be $" + fifteenYear + ".");

//Calculate the monthly payment based on a 25 year repayment plan
var twentyYear = finalAmount / loanTerms [2];

//Console.log out the results for 25 years
console.log("Over the 25 year repayment plan, your estimated monthly payment would be $" + twentyYear + ".");

//Alert the user how much the amount would be for a 25 year repayment plan
alert("Over the 25 year repayment plan, your estimated monthly payment would be $" + twentyYear + ".");
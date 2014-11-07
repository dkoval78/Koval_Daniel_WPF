/*
Daniel Koval
WPF section 01
11/6/14
expressions industry
 */

//To determine how much the user can expect to pay in student loans

//Array of loan terms in years
var loanTerms = ['10', "15", "25"];

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
var avgInterest = prompt("What is your average interest rate?");

//Console.log out the results
console.log(avgInterest);

//Calculate the totals
var totalOwed = totalLoans * avgOwed;

var finalInterest = totalOwed * avgInterest;

var finalAmount = totalOwed + finalInterest;

//Alert the user how much the amount would be for a 10 year repayment plan

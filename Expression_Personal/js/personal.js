/*
Daniel Koval
WPF section 01
11/6/14
expressions personal
 */

//Calculate how much user can expect to pay for gas in a year

//Ask the user what their name is
var name = prompt("What is your name?");

//Console.log out the response
console.log(name);

//Ask how much user pays for each tank of gas
var dollarsTank = prompt(name + ", how much does it cost to fill your gas tank?");

//Console.log out the response
console.log(dollarsTank);

//Ask how often they fill their tank per week

var timesMonth = prompt(name + ", how many times do you fill your tank per month?");

//Console.log out the response
console.log(timesMonth);

//Ask how any months in a year

var monthsYear = prompt(name + ", how many months are in a year?");

//Console.log out the response
console.log(monthsYear);

//Calculate how much they will pay for gas in a year
var dollarsYear = dollarsTank * timesMonth * monthsYear ;

//Alert user with the dollar amount
alert(name + " based on your answers, you will pay " + dollarsYear + " this year.");

//Console.log out the response
console.log(dollarsYear);
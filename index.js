// Write your solution in this file!

//declare customerName to be bob in global scope

var customerName = "bob";

//upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName; 
}

//setBestCustomer(): Write a function that when called, declares a variable called bestCustomer in global scope 
// and assigns it to be 'not bob'

var bestCustomer;

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer ;
}

/*overwriteBestCustomer(): See the consequences of declaring a variable in global scope, 
 by writing a new function called overwriteBestCustomer() 
 that changes that bestCustomer variable. */

 function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

/* leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer;
 be sure to assign it some initial value. Finally, write a function called changeLeastFavoriteCustomer() 
 that attempts to change that constant - notice what JavaScript does when you try to change the constant. */

 const leastFavoriteCustomer = "nobody";

 function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "everybody";
 }



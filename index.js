/* **********************************************************************************************
Author: Matthew Kopay
Last Modified:
Assignment: Module 2 - Using JavaScript to make small talk with the user 
************************************************************************************************* */

function greet() {

    var name  = prompt('What is your name?');
    alert('Hello, ' + name); 
 
    var age = parseInt(prompt('How old are you?'));
    var confirmBday = confirm('Did you have a birthday this year?');
    var currentYear = new Date().getFullYear();
    
    if (confirmBday) {
        bYear = currentYear - age;
    }
    else {
        bYear = currentYear - age - 1;
    }

    alert('You were born in: ' + bYear);

}
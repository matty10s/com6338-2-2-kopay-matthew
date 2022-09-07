/*
Author: Matthew Kopay
COMM6338 Module 2 Assignment 2 Creating a Greeting Using Javascript
*/

function greet() {

    var name  = prompt('What is your name?');
    alert('Hello, ' + name); 
 
    var age = parseInt(prompt('How old are you?'));
    var confirmBday = confirm('Did you have a birthday this year?');
    var currentYear = new Date().getFullYear();
    
    if (confirmBday) {
        birthYear = currentYear - age;
    }
    else {
        birthYear = currentYear - age - 1;
    }

    alert('You were born in: ' + birthYear);

}
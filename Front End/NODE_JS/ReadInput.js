readinput=require('readline-sync') //for reading user inputs from console
arrfunc=require('./ArrayFunctions')

console.log('Enter Your Name')
fullName=readinput.question();
console.log('Enter Your Age')
age=Number(readinput.question());
console.log('Enter Your Country')
country=readinput.question();

console.log('Capital of '+country+' is '+ arrfunc.getCapCity(country))

if(age>=18 && age<=45)
console.log("You are Eligible for Gratuity")
else
console.log("Apply for Gratuity consideration")
readinput=require('readline-sync')

function validate(empname,empage){
    if(empname.length<5)
    console.log("Name should be min of 5 Letters")
    if(empage<18)
    console.log("Not Eligible")
}

function callValidate(valdata)
{
console.log('Enter Your Name');
ename=readinput.question();
console.log('Enter Your Age');
eage=Number(readinput.question());

valdata(ename,eage);
}

callValidate(validate);



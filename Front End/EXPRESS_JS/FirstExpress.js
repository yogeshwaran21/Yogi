var exp=require('express'); //Import expressjs into application
var expenv=exp() // initialize the environment for express js app
var path=require('path');
var visitorCount=0;

expenv.get('/',welcome);
function welcome(request,response){
    var str="<html><body>"
    str+="<b>First Website</b><br>";
    visitorCount++;
    str +="<b>You are a Visitor # </b>" + visitorCount;
    var today=new Date();
    str += "<br><b>Today: </b>" + today +"<br>";
    str += "<br><a href='/login'>Click To Login</a>";
    str += "</body></html>";
    response.send(str);//send response back to caller.
}
expenv.get('/login',loginform);
function loginform(request,response){
   console.log("Display LoginForm");
   //response.sendFile(__dirname+'/loginform.html');
   response.sendFile(path.join(__dirname,'./loginform.html'));
}
expenv.get('/signin',authenticate)
function authenticate(request,response){
    console.log("Authenticating")
    var validid="Yogesh";
    var validpwd="12345";

    var uname=request.query.userId;
    var upwd=request.query.password;

    if(uname==validid && upwd==validpwd){
        response.send("<b>Welcome</b>");
    }
    else{
        response.send("<b>Invalid Username/Password</b>)<br><a href='/login'>Retry</a>")
    }
    response.send("<b>You are Authenticated..")
}
expenv.listen(7800,"localhost");
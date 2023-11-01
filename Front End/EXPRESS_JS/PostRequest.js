var exp = require('express'); //Import expressjs into application
var bparser = require('body-parser')
var expenv = exp() // initialize the environment for express js app
expenv.use(bparser.urlencoded({ extended: false }));
var proc = require('process');

var path = require('path');
var visitorCount = 0;

expenv.get('/', welcome);
function welcome(request, response) {
    var str = "<html><body>"
    str += "<b>First Website</b><br>";
    visitorCount++;
    str += "<b>You are a Visitor # </b>" + visitorCount;
    var today = new Date();
    str += "<br><b>Today: </b>" + today + "<br>";
    str += "<br><a href='/login'>Click To Login</a>";
    str += "</body></html>";
    response.send(str);//send response back to caller.
}
expenv.get('/login', loginform);
function loginform(request, response) {
    console.log("Display LoginForm");
    //response.sendFile(__dirname+'/loginform.html');
    response.sendFile(path.join(__dirname, './loginform.html'));
}
expenv.post('/signin', authenticate)
function authenticate(request, response) {
    console.log("Authenticating")
    // var validid="Yogesh";
    // var validpwd="1234";

    var users = [{ username: 'Yogi', password: '12345' },
    { username: 'Siva', password: '123456' },
    { username: 'Babu', password: '1234567' },
    { username: 'Velu', password: '12345678' },
    ];
    var result=false;
    var uname = request.body.userId;
    var upwd = request.body.password;
    for (i in users) {
        if (uname == users[i].username && upwd == users[i].password) {
            result = true;
            break;
        }
    }
    if (result == true)
        response.send("<b>Welcome</b>");

    else 
        response.send("<b>Invalid Username/Password</b>)<br><a href='/login'>Retry</a>")
    

}
    // var port=0;
    // console.log("Enter a port #");
    // port=Number(file.question());
    expenv.listen(proc.argv[2], proc.argv[3]);
    console.log("Start the server at port " + proc.argv[2]);
    for (i in proc.argv) {
        console.log(proc.argv[i]);
    }

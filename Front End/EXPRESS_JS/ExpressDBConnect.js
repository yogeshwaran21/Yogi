var exp = require('express'); //Import expressjs into application
var my_sql=require('mysql');
var proc = require('process');
var cors=require('cors');
var bparser = require('body-parser')
var expenv = exp() // initialize the environment for express js app
expenv.use(bparser.json());
expenv.use(cors());
expenv.use(bparser.urlencoded({extended:true}));

//var mysqlconn=my_sql();

var path = require('path');
var visitorCount = 0;

var mysql_conn=my_sql.createConnection({host:'localhost',port:3306,user:'root',password:'Aa3g3333',database:'world'});
mysql_conn.connect();  
console.log("Connected To Database");
console.log(mysql_conn.statistics());
console.log(mysql_conn.state);

function processResults(error,results){
    //console.log(results);
    for(i in results){
        console.log(JSON.stringify(results[i]));
    }
}

expenv.post('/signin', authenticate)
function authenticate(request, response) {
    console.log("Authenticating");
    mysql_conn.query('SELECT * from users',processResults);

    // var users = [{ username: 'Yogi', password: '12345' },
    // { username: 'Siva', password: '123456' },
    // { username: 'Babu', password: '1234567' },
    // { username: 'Velu', password: '12345678' },
    // ];
//     var result=false;
//     var uname = request.body.userId;
//     var upwd = request.body.password;
//     for (i in users) {
//         if (uname == users[i].username && upwd == users[i].password) {
//             result = true;
//             break;
//         }
//     }
//     if (result == true)
//         response.send("<b>Welcome</b>");

//     else 
//         response.send("<b>Invalid Username/Password</b>)<br><a href='/login'>Retry</a>")
    

}
expenv.post("/addUser",addNewUser)
function addNewUser(request,response)
{
var uid=request.body.userId;
var upwd=request.body.password;
var uemail=request.body.emailId;
console.log(uid + "\t\t" + upwd + "\t\t" + uemail);

var ins="insert into users values('"+uid+"','"+upwd+"','"+uemail+"')";
console.log('Executing - ' + ins);
mysql_conn.query(ins);
console.log('Inserted 1 record into the database')
response.send("<b>True</b>")
}

expenv.post("/deleteuser",deleteUser)
function deleteUser(request,response){
    var uid=request.body.userId;
    var del="delete from users where userid='"+uid+"'";
    console.log('Executing - ' + del);
    mysql_conn.query(del);
    console.log('Deleted 1 record from the database')

}
expenv.post("/updateuser",updateUser)
function updateUser(request,response){
    var uid=request.body.userId;
    var upwd=request.body.password;
    var upd="update users set password='"+upwd+"' where userid='"+uid+"'";
    console.log('Update - ' + upd);
    mysql_conn.query(upd);
    console.log('Updated 1 record to the database')

}

expenv.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
   
    expenv.listen(proc.argv[2], proc.argv[3]);
    console.log("Start the server at port " + proc.argv[2]);
    
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();
var urlencodeParser = bodyParser.urlencoded({extended:false});

var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "banking"
});

app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-type, X-Requested-With, X-CSRF-Token');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    var sql = "SELECT * FROM account";
    con.query(sql, function (err, result) {
        var tmp = JSON.stringify(result);
        res.send(tmp);
        console.log("getAccount");
    });
})

app.post('/AddAccount',urlencodeParser,function(req,res){
    var sql = "INSERT INTO account (account_number, branch_name, balance) VALUES ('"
    +req.body.accountNumber+ "','" + req.body.branchName + "','"  
    + req.body.balance + "')" ;
    res.send(sql);
    con.query(sql,function(err){
        if(err){console.log("Cannot INSERT");}else{console.log("1 row inserted");}
    });
});



app.get('/account_number/:id',urlencodeParser,function(req,res){
    var id = req.params.id;
    var sql = "SELECT * FROM account WHERE account_number='"+id+"'";
    console.log(sql);
    con.query(sql,function(err,result){
        var tmp = JSON.stringify(result);
        res.send(tmp);
    });
})

app.post('/DeleteAccount',urlencodeParser,function(req,res){
    var sql = "DELETE FROM account WHERE account_number = '" + req.body.accountNumber + "'" ;
    console.log(sql);
    con.query(sql,function(err,result){
        if(err){console.log("cannot delete");}else{console.log('account deleted');}
    });
});

app.put('/UpdateAccount',urlencodeParser,function(req,res){
    var acc = req.body.accountNumber;
    var bal = req.body.balance
    sql = "UPDATE account SET balance = '" +bal + "'" + "WHERE account_number = '" + acc + "'" ;
    console.log(sql);
    con.query(sql,function(err,result){
        if(err){console.log('Cannot updatge');}else{res.send('Account updated');}
    });
});

app.get('/user',function(req,res){
    res.send('Hello World user');
});

app.listen(3100,function(){
    console.log('Server running at port 3100');
});
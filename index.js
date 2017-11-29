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

app.get('/',function(req,res){
    res.send('Hello World');
});

app.post('/process_post',urlencodeParser,function(req,res){
    var sql = "INSERT INTO account (account_number, branch_name, balance) VALUES ('"
    +req.body.account_number+ "','" + req.body.branch_name + "','"  
    + req.body.balance + "')" ;
    res.send(sql);
    con.query(sql,function(err){
        if(err){console.log("Cannot INSERT");}else{console.log("1 row inserted");}
    });
});

app.get('/addAccount',function(req,res){
    var sql = "SELECT * FROM account";
    con.query(sql,function(err,result){
        var tmp = JSON.stringify(result);
        res.send(tmp);
        console.log("getAccount");
    });
})

app.get('/account_number/:id',urlencodeParser,function(req,res){
    var id = req.params.id;
    var sql = "SELECT * FROM account WHERE account_number='"+id+"'";
    console.log(sql);
    con.query(sql,function(err,result){
        var tmp = JSON.stringify(result);
        res.send(tmp);
    });
})

app.delete('/account_number',urlencodeParser,function(req,res){
    var id = req.body.id;
    var sql = "DELETE FROM account WHERE account_number = '" + id + "'" ;
    con.query(sql,function(err,result){
        if(err){console.log("cannot delete");}else{console.log('account deleted');}
    });
});

app.put('/account_number',urlencodeParser,function(req,res){
    var acc = req.body.account_number;
    var bal = req.body.balance;
    sql = "UPDATE account SET balance = '" +bal + "'" + "WHERE account_number = '" + acc + "'" ;
    res.send(sql);
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
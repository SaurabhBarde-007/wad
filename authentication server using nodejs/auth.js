var express = require('express'); 
var app = express(); 
var basicAuth = require('basic-auth')

var authFunction = function(req, res, next){ 
    var user = basicAuth(req); 
    if(!user||!user.name||!user.pass){ 
        res.set("WWW-Authenticate", "Basic"); 
        res.send(401); 
        return; 
    }
    if(user.name === "admin"&& user.pass==="mypassword"){ 
        next();
    }else{ 
        res.set("WWW-Authenticate", "Basic"); 
        res.send(401); 
        return;
    }
}

app.get("/login", authFunction,function(req, res){ 
    res.send("<h3>You are an authentic user</h3>");
}); 

app.listen(8000); 
console.log("listening on port 8080");

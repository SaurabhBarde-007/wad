const express = require("express"); 
const app = express(); 
const path = require('path');
const PORT = 5000; 

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>console.log("server is listening on port"+PORT));



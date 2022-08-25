const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('views','../client/views');
app.set('view engine', 'ejs');
app.use(express.static('../client'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.render("index");
})


app.listen(3000, (err)=>{
    if(!err){
        console.log("Server is running");
    }
})
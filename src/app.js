const { static } = require('express');
const express = require('express');
const hbs= require ('hbs');
const path = require('path');
const app = express();
const port= process.env.PORT||5500 ;

let staticpath=path.join(__dirname,"../public");

app.set("view engine","hbs");
app.set("views","D:/nodejslearn/expresswebsite/templates/views");
hbs.registerPartials("D:/nodejslearn/expresswebsite/templates/partials");
app.use(express.static(staticpath));//absolute path ------>>>   "D:/nodejslearn/expresswebsite/public"


app.get('/',(req,res)=>{

res.render("index");


}) //home page

app.get('/about',(req,res)=>{

    res.render("about");
}) // about page


app.get('/weather',(req,res)=>{

    res.render("weather");
}) // weather page



app.get('*',(req,res)=>{

    res.render("404error");
})  // 404 error page


app.listen(port,()=>{console.log("i am listening");});
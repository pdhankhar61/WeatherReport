const { static } = require('express');
const express = require('express');
const hbs= require ('hbs');
const path = require('path');
const app = express();
const port= process.env.PORT||5500 ;

let staticpath=path.join(__dirname,"../public");
let staticpath2=path.join(__dirname,"../templates/views");
let staticpath3=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",staticpath2);
hbs.registerPartials(staticpath3);
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
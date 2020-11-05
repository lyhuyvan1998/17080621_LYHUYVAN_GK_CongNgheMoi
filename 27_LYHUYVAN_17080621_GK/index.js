const express = require("express"); // request express
const bodyParser = require("body-parser"); // request body
const app  = express();

const indexRouter = require('./index.route'); // root

app.use(express.json()); // 
app.use(bodyParser.json()); //
app.set("view engine","ejs"); // 
app.set("views","./views"); // 
app.use(express.urlencoded({extended:true})); 
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000; // khai báo port number

app.use('/', indexRouter); // root

app.listen(port,()=>{
    console.log('Connected Port :::: 3000');
})

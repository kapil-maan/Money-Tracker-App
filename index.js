/*

var express = require("express")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app= express()
app.use(bodyParser.json)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))


const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

//mongoose.connect('mongodb://localhost:5000/MoneyList')
mongoose.connect(`mongodb+srv://kapilmaan0123:7879%40Kapilmongodb@cluster0.kswphur.mongodb.net/MoneyList?retryWrites=true&w=majority&appName=Cluster0`)

var db= mongoose.connection
db.on('error', ()=> console.log("Error in connecting to the Database "))
db.once('open', ()=> {
    var data={
        "Category": "123132",
        "Amount" : "4552",
        "Info" : "512",
        "Date" : "563"
    }

    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Instead Succesfully")
    })
    console.log("Connected to Database")})

app.post("/add",(req,res)=>{
    var category_select = req.body.category_select;
    var amount_input = req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input

    var data={
        "Category": category_select,
        "Amount" : amount_input,
        "Info" : info,
        "Date" : date_input
    }

    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Instead Succesfully")
    })
})

app.get("/",(req,res)=>{
    console.log("file recieved")
    res.send("hello")
    return 
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')

})

app.listen(6000, ()=>{
    console.log("listen 6000")
})
*/





var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app= express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect(`mongodb+srv://kapilmaan0123:7879%40Kapilmongodb@cluster0.kswphur.mongodb.net/MoneyList?retryWrites=true&w=majority&appName=Cluster0`)

var db = mongoose.connection
db.on('error', ()=> console.log("Error in connecting to the Database"))
db.once('open', () => console.log("Connected to Database"))

app.post("/add", (req,res) =>{
    var category_select = req.body.category_select
    var amount_input= req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input

    var data={
        "Category": category_select,
        "Amount" : amount_input,
        "Info": info,
        "Date": date_input
    }
    db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully")

    })
})
app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(5000)

console.log("Listening on port 5000")